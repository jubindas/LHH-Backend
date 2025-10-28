import express from "express";
import dataBase from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = 8000;
const app = express();

dataBase();

app.use(express.json());

import instaPageRoutes from "./routes/instaPageRoutes.js";

import budgetRoutes from "./routes/budgetRoutes.js";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", instaPageRoutes);
app.use("/api", budgetRoutes);

app.get("/test", (req, res) => {
  res.send("working good");
});

app.listen(PORT, () => {
  console.log(`the server is running in localhost:${PORT}`);
});
