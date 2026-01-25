import express from "express"
import 'dotenv/config'
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from 'cors'
import connectDB from "./config/mongodb.js"
import authRouter from "./routes/authRoutes.js"

const app = express();
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.path);
  next();
});
connectDB();


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
}); 
app.get("/", (req,res) => {
    res.send("API is working")
})
app.use('/api/auth', authRouter)


const PORT  = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})