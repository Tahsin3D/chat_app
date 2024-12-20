// https://www.youtube.com/watch?v=ntKkVrQqBYY
import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js";
import cookieParser from 'cookie-parser'
import messageRoutes from './routes/message.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Add JSON parsing middleware
app.use(express.json());
app.use(cookieParser())


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: "+ PORT);
  connectDB();  
});
