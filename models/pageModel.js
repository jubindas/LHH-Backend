import mongoose from "mongoose";

const InstaPageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  page_link: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
});

const InstaPage = mongoose.model("InstaPage", InstaPageSchema);
export default InstaPage;
