import mongoose from "mongoose";

import deceasedSchema from "./deceased.js";
import applicantSchema from "./applicant.js";
import applicationTypeSchema from "./applicationType.js";
import documentsUploadSchema from "./documentsUpload.js";

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Embedded sub-schemas
    applicant: {
      type: applicantSchema,
      required: true,
    },

    deceased: {
      type: deceasedSchema,
      required: true,
    },

    applicationType: {
      type: applicationTypeSchema,
      required: true,
    },

    documentsUpload: {
      type: documentsUploadSchema,
      default: () => ({}), // Initialize with empty object to avoid null references
    },

    status: {
      type: String,
      enum: ["draft", "submitted", "under_review", "approved", "rejected"],
      default: "draft",
    },

    // Optional: Track who reviewed/approved the application
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    reviewedAt: {
      type: Date,
    },

    rejectionReason: {
      type: String,
      trim: true,
    },
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Optional: Add indexes for better query performance
applicationSchema.index({ user: 1, status: 1 });
applicationSchema.index({ "applicant.fullName": 1 });
applicationSchema.index({ "deceased.fullName": 1 });

// Virtual for easy status checking
applicationSchema.virtual("isFinalized").get(function () {
  return ["approved", "rejected"].includes(this.status);
});

applicationSchema.pre("save", function (next) {
  if (this.status === "submitted") {
    if (!this.documentsUpload || this.documentsUpload.status !== "submitted") {
      return next(new Error("Documents must be submitted first"));
    }
  }

  if (["approved", "rejected"].includes(this.status)) {
    if (!this.reviewedBy) {
      return next(new Error("Application must be reviewed first"));
    }

    this.reviewedAt = new Date();

    if (this.status === "rejected" && !this.rejectionReason) {
      return next(new Error("Rejection reason is required"));
    }
  }

  next();
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;