import express from "express";


const PORT = 8000;
const app = express();

app.get("/test", (req, res) => {
  res.send("working good");
});

app.listen(PORT, () => {
  console.log(`the server is running in localhost:${PORT}`);
});
