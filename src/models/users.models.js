import mongoose from "mongoose";

const userdata = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const usermodel = mongoose.model("user", userdata);
export default usermodel;
