import express from "express";
const router = express.Router();

import { getProfilePicture } from "../models/index.js";

router.get("/:id", async (req, res) => {{
    const result = await getProfilePicture(req.params.id);
    res.json({
      success: true,
      payload: result,
    });
    }
});

export default router;