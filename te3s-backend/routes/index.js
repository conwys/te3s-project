import express from "express";
const router = express.Router();

import {
  getMembers,
} from "../models/index.js";

// GET cards by name or email
router.get("/", async (req, res) => {{
  const result = await getMembers();
  res.json({
    success: true,
    payload: result,
  });
  }
});

export default router;
