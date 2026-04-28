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
  { _id: false },
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
      default: function () {
        return this.applicationType === "grant-probate";
      },
    },

    estate: {
      estimatedValue: {
        type: Number,
        required: true,
        min: 0,
      },

      assets: [assetSchema],

      
      calculatedTotal: {
        type: Number,
        default: 0,
      },
    },
  },
  { _id: false },
);

export default applicationTypeSchema;
