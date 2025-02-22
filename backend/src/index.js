// https://www.youtube.com/watch?v=ntKkVrQqBYY
import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser'
import messageRoutes from './routes/message.route.js'
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Add JSON parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }
))


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: "+ PORT);
  connectDB();  
});
