import express from "express";
const router = express.Router();

import {
  getByName,
  getByEmail,
  addNewCard,
  deleteById,
  editById,
} from "../models/index.js";

// GET cards by name or email
router.get("/", async (req, res) => {
  if (req.query.name !== undefined) {
    const result = await getByName(req.query.name);
    res.json({
      success: true,
      payload: result,
    });
  } else if (req.query.email !== undefined) {
    const result = await getByEmail(req.query.email);
    res.json({
      success: true,
      payload: result,
    });
  }
});

// POST to create new card
router.post("/", async (req, res) => {
  const result = await addNewCard(req.body);
  res.status(201).json({
    success: true,
    payload: result,
  });
});

// PATCH card by id
router.patch("/:id", async (req, res) => {
  const result = await editById(req.params.id, req.body);
  res.json({
    success: true,
    payload: result,
  });
});

// DELETE card by id
router.delete("/:id", async (req, res) => {
  const result = await deleteById(req.params.id);
  res.json({
    success: true,
    payload: result,
  });
});

export default router;
