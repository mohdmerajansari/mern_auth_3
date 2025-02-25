import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/ping", (req, res) => {
  res.send("Pong")
})

app.use(cors())

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`The server is running on http://localhost:${PORT}`)
})

//MFhzRabdCOIyIpGd
