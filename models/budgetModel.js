import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    song: {
      name: { type: String, required: true },
      singer: { type: String },
      link: { type: String },
    },
    pages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InstaPage",
      },
    ],
    totalBudget: { type: Number, default: 0 },
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Campaign", campaignSchema);
