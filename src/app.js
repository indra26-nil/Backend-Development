import express from "express";
const app = express();

app.use(express.json());
const notes = [];

app.post("/create", (req, res) => {
  notes.push(req.body);
  console.log("created..");

  res.status(201).json({
    message: "created successfully..",
  });
});

app.get("/view", (req, res) => {
  console.log(notes);

  res.status(200).json({
    message: "fetched successfully..",
    notes: notes,
  });
});
app.delete("/delete/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
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

export default app;
