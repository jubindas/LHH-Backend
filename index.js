import express from "express";
import dataBase from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = 8000;
const app = express();

dataBase();

app.use(express.json());

import instaPageRoutes from "./routes/instaPageRoutes.js";

app.use("/api", instaPageRoutes);

app.get("/test", (req, res) => {
  res.send("working good");
});

app.listen(PORT, () => {
  console.log(`the server is running in localhost:${PORT}`);
});
