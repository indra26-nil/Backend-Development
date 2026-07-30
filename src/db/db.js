import mongoose from "mongoose";
async function connectDB() {
  await mongoose.connect(process.env.mongodb_URL);
  console.log("connected to database..");
}

export default connectDB;
