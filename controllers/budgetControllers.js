import Campaign from "../models/budgetModel.js";
import InstaPage from "../models/pageModel.js";

export const createCampaign = async (req, res) => {
  try {
    const { name, song, pageIds, startDate, endDate } = req.body;

    const pages = await InstaPage.find({ _id: { $in: pageIds } });
    const totalBudget = pages.reduce((acc, page) => acc + page.price, 0);

    const campaign = new Campaign({
      name,
      song,
      pages: pageIds,
      totalBudget,
      startDate,
      endDate,
    });

    await campaign.save();
    res.status(201).json(campaign);
  } catch (err) {
    console.error("Error creating campaign:", err);
    res.status(500).json({ message: "Server error" });
  }
};


export const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("pages");
    res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const getCampaignById = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id).populate("pages");
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(campaign);
  } catch (err) {
    console.error("Error fetching campaign:", err);
    res.status(500).json({ message: "Server error" });
  }
};