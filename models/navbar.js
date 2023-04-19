const mongoose = require("mongoose");

const navbarSchema = new mongoose.Schema({
  navLinkText: {
    type: String,
    required: true,
  },
  subNavLinks: [
    {
      subNavLinkText: {
        type: String,
        required: true,
      },
      subNavLinkURL: {
        type: String,
        required: true,
      },
    },
  ],
  component: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Component",
    required: true,
  },
});

module.exports = mongoose.model("Navbar", navbarSchema);
