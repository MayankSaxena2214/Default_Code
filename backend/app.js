import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

dotenv.config();
export const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

dbConnection();
// Routers



app.use(errorMiddleware);


