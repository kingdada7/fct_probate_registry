import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  relationshipToDeceased: {
    type: String,
    required: true,
  },

  occupation: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
    trim: true,
  },
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
