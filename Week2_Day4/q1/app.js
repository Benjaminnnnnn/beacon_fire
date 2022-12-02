const express = require("express");
const todoRouter = require("./router");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/todo", todoRouter);

// invalidates all other routes
app.all("*", (req, res) => {
  res.status(400).json({
    error: "Invalid URI",
    description: `The URI ${req.url} is not valid.`,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is listening for requests...");
});
