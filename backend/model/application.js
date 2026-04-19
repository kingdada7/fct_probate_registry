import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    relationshipToDeceased: {
      type: String,
      required: [true, "Relationship is required"],
      trim: true,
      maxlength: 100,
    },

    occupation: {
      type: String,
      required: [true, "Occupation is required"],
      trim: true,
      maxlength: 100,
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters"],
      maxlength: [200, "Address cannot exceed 200 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9+\-() ]{7,20}$/, "Enter a valid phone number"],
    },

    identificationType: {
      type: String,
      required: [true, "Identification type is required"],
      trim: true,
      enum: {
        values: [
          "NIN",
          "Voters Card",
          "International Passport",
          "Driver's License",
        ],
        message: "Invalid ID type selected",
      },
    },

    identificationNumber: {
      type: String,
      required: [true, "Identification number is required"],
      trim: true,
      minlength: [5, "Identification number must be at least 5 characters"],
      maxlength: [50, "Identification number cannot exceed 50 characters"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
