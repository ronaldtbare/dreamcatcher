const express = require("express");
const path = require("path");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dreamcatcher", {
  useNewUrlParser: true
});

const DreamModel = Mongoose.model("dream", {
  subject: String,
  date: Date,
  hoursSlept: Number,
  description: String, 
});

// API routes

app.get("/dreamList", async (request, response) => {
  try {
    var dreamList = await DreamModel.find().exec();
    response.send(dreamList);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/saveDream", async (request, response) => {
  try {
    var saveDream = request.body;
    var dream = new DreamModel(saveDream);
    var result = await dream.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/deleteDream/:dreamID", async (request, response) => {
  try {
    var deleteDream = await DremModel.deleteOne({ _id: request.params.dreamID }).exec();
    response.send(deleteDream);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

if (process.env.NODE_ENV === "production"){
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
