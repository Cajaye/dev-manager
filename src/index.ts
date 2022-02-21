import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import cors from "cors";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleWare } from "./middleware/error-handler";
import cookieParser from "cookie-parser";
import { authorizeUser } from "./middleware/authentication";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes
import usersRoute from "./routes/auth";
app.use("/api/v1/auth", usersRoute);

import projectRoute from "./routes/projects";
app.use("/api/v1/projects", authorizeUser, projectRoute);

//middlewares
app.use(notFound);
app.use(errorHandlerMiddleWare);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
