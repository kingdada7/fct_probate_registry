import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
