import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: [
        "Real Estate",
        "Bank Account",
        "Vehicle",
        "Shares",
        "Insurance",
        "Personal Property",
        "Other",
      ],
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    value: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const applicationTypeSchema = new mongoose.Schema(
  {
    applicationType: {
      type: String,
      required: true,
      enum: ["grant-probate", "letters-admin"],
    },

    hasWill: {
      type: Boolean,
      required: true,
    },

    estate: {
      estimatedValue: {
        type: Number,
        required: true,
        min: 0,
      },

      assets: {
        type: [assetSchema],
        default: [],
      },

      // optional but VERY useful
      calculatedTotal: {
        type: Number,
        default: 0,
      },
    },
  },
  { _id: false }
);

export default applicationTypeSchema;