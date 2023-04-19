const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  component: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  },
});

module.exports = mongoose.model("News", newsSchema);
