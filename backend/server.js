import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import voteRoute from "./routes/voteRoute.js";
dotenv.config();

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", authRoute);
app.use("/api/vote", voteRoute);

//database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Database connected & listening on port " + process.env.PORT)
        })
    }).catch((err) => {
        console.error(err)
    })