import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
connectDB();
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors middleware
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
