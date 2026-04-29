import mongoose from "mongoose";

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
      enum: ["grant-probate", "letters-admin"],
      required: true,
    },

    hasWill: {
      type: Boolean,
      default: false,
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

      calculatedTotal: {
        type: Number,
        default: 0,
      },
    },
  },
  { _id: false }
);

applicationTypeSchema.pre("save", function (next) {
  // auto-set hasWill
  this.hasWill = this.applicationType === "grant-probate";

  // calculate total
  if (this.estate?.assets?.length) {
    const total = this.estate.assets.reduce(
      (sum, asset) => sum + asset.value,
      0
    );

    this.estate.calculatedTotal = total;

    if (this.estate.estimatedValue < total) {
      return next(
        new Error("Estimated value cannot be less than total asset value")
      );
    }
  }

  next();
});

export default applicationTypeSchema;