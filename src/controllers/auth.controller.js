import usermodel from "../models/users.models.js";
import jwt from "jsonwebtoken";
async function registerUser(req, res) {
  const { username, email, password } = req.body;

  const userpresent = await usermodel.findOne({
    email,
  });

  if (userpresent) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const user = await usermodel.create({
    username,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "user registered successfully",
    user,
  });
}

export default { registerUser };
