const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());


const dburl = "mongodb+srv://admin:admin@cluster0.ljm363i.mongodb.net/test";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const con = mongoose.connection;

mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("Connected to database...");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

app.use(express.json());

// Import Routes

const componentRouter = require("./routes/component");
const newsRouter = require("./routes/news");
const navbarRouter = require("./routes/navbar");
app.use("/info", componentRouter);
app.use("/", newsRouter);
app.use("/", navbarRouter);

app.listen(9000, () => {
  console.log("Server started at port 9000");
});
