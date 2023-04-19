const Navbar = require("../models/navbar");
const Component = require("../models/component");

exports.createNavbar = async (req, res) => {
  const { component, navLinkText, subNavLinks } = req.body;

  try {
    const navbar = new Navbar({
      component: component,
      navLinkText,
      subNavLinks: subNavLinks.map((subNavLink) => ({
        subNavLinkText: subNavLink.subNavLinkText,
        subNavLinkURL: subNavLink.subNavLinkURL,
      })),
    });

    const savedNavbar = await navbar.save();

    res.status(201).json(savedNavbar);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

// Get all navbars
exports.getAllNavbars = async (req, res) => {
  try {
    const navbars = await Navbar.find();
    res.json(navbars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a navbar
exports.updateNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!navbar) {
      return res.status(404).send("Navbar not found");
    }
    res.status(200).json(navbar);
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE a navbar
exports.deleteNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findByIdAndDelete(req.params.id);
    if (!navbar) {
      return res.status(404).send("Navbar not found");
    }
    res.status(200).json(navbar);
  } catch (err) {
    res.status(500).send(err);
  }
};
