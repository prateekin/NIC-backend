const Component = require("../models/component");

exports.getComponent = async (req, res) => {
  try {
    const components = await Component.find();
    res.json(components);
  } catch (err) {
    res.status(500).send("Error " + err);
  }
};

exports.createComponent = async (req, res) => {
  const newComponent = new Component({
    name: req.body.name,
  });

  try {
    const component = await newComponent.save();
    res.json(component);
  } catch (err) {
    res.send(Error);
  }
};
