
import InstaPage from "../models/pageModel.js";

const createInstPage = async (req, res) => {
  try {
    const { name, page_link, price, category } = req.body;

    const existibgPage = await InstaPage.findOne({ page_link });

    if (existibgPage) {
      return res.status(400).json({ message: "Page link already exists" });
    }

    const instaPage = new InstaPage({ name, page_link, price, category });
    await instaPage.save();

    res.status(201).json(instaPage);
  } catch (error) {
    console.log("the error is", error);
  }
};


const getInstaPage = async (req, res) => {
  try {
    const instaPages = await InstaPage.find();
    res.status(200).json(instaPages);
  } catch (error) {
    console.log("the error is", error);
  }
};


const getInstaPageById = async (req, res) => {
  try {
    const { id } = req.params;
    const instaPage = await InstaPage.findById(id);
    if (!instaPage) {
      return res.status(404).json({ message: "Insta page not found" });
    }
    res.status(200).json(instaPage);
  } catch (error) {
    console.log("the error is", error);
  }
};


const updateInstaPage = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const instaPage = await InstaPage.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!instaPage) {
      return res.status(404).json({ message: "Insta page not found" });
    }

    res.status(200).json(instaPage);
  } catch (error) {
    console.log("the error is", error);
  }
};

export { createInstPage, getInstaPage, getInstaPageById, updateInstaPage };