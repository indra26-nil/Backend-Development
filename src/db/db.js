import mongoose from "mongoose";
async function connectDB() {
  try{await mongoose.connect(process.env.mongodb_URL);
  console.log("connected to database..");
  }catch(err){
    console.error("database connection error",err);
    
  }
}

export default connectDB;
