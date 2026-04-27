import mongoose from "mongoose";

import deceasedSchema from "./deceased.js";
import applicantSchema from "./applicant.js";

const applicationSchema = new mongoose.Schema(
  {
    applicant: applicantSchema,
    deceased: deceasedSchema,

    status: {
      type: String,
      enum: ["draft", "completed"],
      default: "draft",
    },
  },
  { timestamps: true },
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
