import mongoose from "mongoose";

const deceasedSchema = new mongoose.Schema(
  {
    deceasedName: {
      type: String,
      required: true,
      trim: true,
    },

    dateOfDeath: {
      type: Date,
      required: true,
    },

    placeOfDeath: {
      type: String,
      required: true,
      trim: true,
    },

    dateOfMarriage: Date,

    spouse: {
      name: { type: String, trim: true },
    },

    occupationAndPlaceOfWork: { type: String, trim: true },

    formOfMarriage: {
      type: String,
      enum: ["statutory", "customary", "islamic"],
    },

    identification: {
      idType: {
        type: String,
        enum: ["NIN", "Voters Card", "International Passport", "Driver's License"],
      },
      number: String,
    },

    lastAddress: { type: String, trim: true },

    nextOfKin: {
      name: String,
      relationship: {
        type: String,
        enum: ["Parent", "Sibling", "Child", "Spouse"],
      },
      phone: String,
      address: String,
    },

    children: {
      type: [
        {
          name: String,
          age: Number,
          motherName: String,
          motherPhone: String,
        },
      ],
      default: [],
    },

    family: {
      brothers: { type: [{ name: String, address: String }], default: [] },
      sisters: { type: [{ name: String, address: String }], default: [] },
    },

    bankAccounts: {
      type: [
        {
          bankName: String,
          accountNumber: String,
        },
      ],
      default: [],
    },

    sureties: {
      type: [
        {
          name: String,
          phone: String,
          address: String,
          occupation: String,
          bankDetails: String,
          propertyValue: String,
          incomePerAnnum: String,
        },
      ],
      default: [],
    },
  },
  {
    _id: false,
  }
);

export default deceasedSchema;