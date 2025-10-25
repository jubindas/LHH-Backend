import express from "express";

import {
  createInstPage,
  getInstaPage,
  getInstaPageById,
  updateInstaPage,
} from "../controllers/instaPageContollers.js";

const router = express.Router();

router.post("/insta-page", createInstPage);
router.get("/insta-page", getInstaPage);
router.get("/insta-page/:id", getInstaPageById);
router.put("/insta-page/:id", updateInstaPage);

export default router;
