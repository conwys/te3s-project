import express from "express";
const router = express.Router();

import { getProfilePicture } from "../models/index.js";

router.get("/", async (req, res) => {{
    const result = await getProfilePicture();
    res.json({
      success: true,
      payload: result,
    });
    }
});

export default router;