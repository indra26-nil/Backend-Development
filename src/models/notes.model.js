import mongoose from "mongoose";

const studentData = new mongoose.Schema({
  name: String,
  roll: Number,
  address: String
});

const studentModel = mongoose.model("student", studentData);
export default studentModel;
