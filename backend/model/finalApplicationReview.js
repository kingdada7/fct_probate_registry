import mongoose from "mongoose";

/**
 * Embedded asset schema (matches table in UI)
 */
const assetSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        "Real Estate",
        "Bank Account",
        "Vehicle",
        "Shares",
        "Insurance",
        "Personal Property",
        "Other",
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    value: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

/**
 * Document schema (matches Supporting Documents section)
 */
const documentSchema = new mongoose.Schema(
  {
    fileName: String,
    originalName: String,
    fileUrl: String,
    fileType: {
      type: String,
      enum: ["pdf", "jpg", "jpeg", "png"],
    },
  },
  { _id: false }
);

/**
 * MAIN APPLICATION MODEL (Final Review Snapshot)
 */
const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    applicationId: {
      type: String,
      unique: true,
    },

    // =====================
    // APPLICANT SECTION
    // =====================
    applicant: {
      fullName: String,
      relationshipToDeceased: String,
      email: String,
      phone: String,
      address: String,
    },

    // =====================
    // DECEASED SECTION
    // =====================
    deceased: {
      fullName: String,
      dateOfDeath: Date,
      deathCertificateNumber: String,
      lastAddress: String,
    },

    // =====================
    // ESTATE SECTION
    // =====================
    estate: {
      assets: [assetSchema],
      totalValue: {
        type: Number,
        default: 0,
      },
    },

    // =====================
    // DOCUMENTS SECTION
    // =====================
    documents: {
      deathCertificate: documentSchema,
      affidavitKinship: documentSchema,
      valuationReport: documentSchema,
      otherDocuments: [documentSchema],
    },

    // =====================
    // DECLARATION
    // =====================
    declaration: {
      accepted: {
        type: Boolean,
        default: false,
      },
      acceptedBy: String,
      acceptedAt: Date,
    },

    // =====================
    // WORKFLOW STATUS
    // =====================
    status: {
      type: String,
      enum: [
        "draft",
        "submitted",
        "under_review",
        "approved",
        "rejected",
      ],
      default: "draft",
    },

    // =====================
    // REVIEW INFO
    // =====================
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    reviewedAt: Date,

    rejectionReason: String,
  },
  {
    timestamps: true,
  }
);

/**
 * INDEXES (for dashboard + admin filtering)
 */
applicationSchema.index({ user: 1, createdAt: -1 });
applicationSchema.index({ status: 1 });
applicationSchema.index({ applicationId: 1 });

/**
 * AUTO-CALCULATE ESTATE TOTAL
 */
applicationSchema.pre("save", function (next) {
  if (this.estate?.assets?.length) {
    this.estate.totalValue = this.estate.assets.reduce(
      (sum, a) => sum + a.value,
      0
    );
  }

  next();
});

/**
 * MODEL
 */
const Application = mongoose.model("Application", applicationSchema);

export default Application;