import express from "express";

import {
  createCampaign,
  getCampaignById,
  getCampaigns,
} from "../controllers/budgetControllers.js";

const router = express.Router();

router.post("/budget", createCampaign);
router.get("/budget", getCampaigns);
router.get("/budget/:id", getCampaignById);

export default router;
