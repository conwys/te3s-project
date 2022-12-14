import express from "express";
const router = express.Router();

import {
  getByName,
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

export default router;
