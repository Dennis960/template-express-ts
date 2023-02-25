import express from "express";
import api from "./api.js";

const app = express();

const PORT = 4801;

// serve api
app.use("/api", api);

// default 404 error page
app.use((req, res) => {
  res.status(404).send("Sorry, but this page does not exist.");
});

app.listen(PORT);
