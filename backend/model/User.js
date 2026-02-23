import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: ["standard-admin", "citizen", "super-admin"],
      default: "citizen",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

    superAdminToken: {
      type: String,
      required: true,
      uppercase: true,
      required: function () {
        return this.role === "super-admin";
      },
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
