import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    originalName: { type: String, required: true },
    fileUrl: { type: String, required: true },

    fileType: {
      type: String,
      enum: ["pdf", "jpg", "jpeg", "png"],
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
      max: 5 * 1024 * 1024,
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false },
);

const documentsUploadSchema = new mongoose.Schema(
  {
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },

    deathCertificate: {
      type: documentSchema,
      required: true,
    },

    affidavitKinship: {
      type: documentSchema,
      required: true,
    },

    valuationReport: {
      type: documentSchema,
      default: null,
    },

    otherDocuments: {
      type: [documentSchema],
      default: [],
    },

    declarationAccepted: {
      type: Boolean,
      default: false,
    },

    submittedAt: {
      type: Date,
      default: null,
    },

    status: {
      type: String,
      enum: ["draft", "submitted", "under_review", "approved", "rejected"],
      default: "draft",
    },
  },
  { timestamps: true },
);

export default mongoose.model("DocumentsUpload", documentsUploadSchema);
