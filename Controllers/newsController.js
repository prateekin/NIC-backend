const News = require("../models/news");

exports.getNews = async (req, res) => {
  try {
    const news = await News.find().populate("component");
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createNews = async (req, res) => {
  const news = new News({
    heading: req.body.heading,
    subHeading: req.body.subHeading,
    content: req.body.content,
    component: req.body.component,
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.editNews = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findByIdAndUpdate(
      id,
      {
        heading: req.body.heading,
        subheading: req.body.subheading,
        content: req.body.content,
        component: req.body.component,
      },
      { new: true }
    ).populate("component");

    if (!news) {
      return res.status(404).json({ message: "News article not found" });
    }

    res.json(news);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return res.status(404).json({ message: "News article not found" });
    }

    res.json(deletedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
