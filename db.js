import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {

  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;

  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone-backend.xakx1hu.mongodb.net/?retryWrites=true&w=majority&appName=whatsapp-clone-backend`;

  try {
    //The below line of code is helping me connect to MongoDB
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
};

export default connection;