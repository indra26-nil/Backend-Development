import express from "express";
import studentModel from "./models/notes.model.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/create", async (req, res) => {
  const data = req.body;

  await studentModel.create({
    name: data.name,
    roll: data.roll,
    address: data.address,
  });
  console.log("created..");

  res.status(201).json({
    message: "created successfully..",
  });
});

app.get("/view", async (req, res) => {
  const notes = await studentModel.find();
  console.log(notes);

  res.status(200).json({
    message: "fetched successfully..",
    notes: notes,
  });
});

app.get("/viewone/:_name", async (req, res) => {
  const notes = await studentModel.findOne({
    name: "_name",
  });
  console.log(notes);

  res.status(200).json({
    message: "fetched successfully..",
    notes: notes,
  });
});

app.delete("/delete/:index", async (req, res) => {
  await res.status(200).json({
    message: "deleted successfully..",
  });
});

app.patch("/edit/:index", (req, res) => {
  const index = req.params.index;
  const bioo = req.body.bio;
  notes[index].bio = bioo;
  res.status(200).json({
    message: "edited successfully..",
  });
});

app.use("/api/auth", authRoutes);

export default app;
