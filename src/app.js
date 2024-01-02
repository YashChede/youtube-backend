import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// limit incoming data from form
app.use(express.json({ limit: "16kb" }));

// data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for getting or storing files,images,pdfs
app.use(express.static("public"));

// for CURD operations of cookies in browser from server
app.use(cookieParser());

export { app };
