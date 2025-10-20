import mongoose from "mongoose";

const dataBase = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);

    console.log(`✅ MongoDB Connected`);
  } catch (error) {
    console.log("❌ Something went wrong, try again");
    console.error(error.message);
    process.exit(1);
  }
};

export default dataBase;
