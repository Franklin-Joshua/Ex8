import express from "express";
import Child from "../models/Child.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json(await Child.find());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const child = new Child(req.body);
    await child.save();
    res.json({ message: "Child record added!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Child.findByIdAndDelete(req.params.id);
    res.json({ message: "Record deleted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
