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

app.use(cors({
<<<<<<< HEAD
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://mern-auth-3-ui.vercel.app'  // Add your Vercel frontend URL
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
=======
  origin:"https://mern-auth-3-ui.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials:true
}))
>>>>>>> 87515ff1bacbff04e723e16f0e8961307169cb1b


app.use("/api/users", userRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`The server is running on http://localhost:${PORT}`)
})

//MFhzRabdCOIyIpGd
