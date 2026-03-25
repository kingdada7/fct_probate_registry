import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
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

    staffId: {
      type: String,
      required: true,
      unique: true,
    },

    division: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["citizen", "standard-admin", "super-admin"],
      default: "citizen",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    lastActive: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    // superAdminToken: {
    //   type: String,
    //   uppercase: true,
    //   required: function () {
    //     return this.role === "super-admin";
    //   },
    // },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
