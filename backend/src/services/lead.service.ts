import axios from "axios";
import { Lead } from "../types/lead";

const leads: Lead[] = [];

const calculateScore = (email: string, source?: string) => {
  let score = 0;

  if (email.includes("@gmail.com")) score += 10;
  else score += 40;

  if (source === "website") score += 30;
  if (source === "postman") score += 5;

  return score;
};

const getTier = (score: number) => {
  if (score >= 60) return "HOT";
  if (score >= 30) return "WARM";
  return "COLD";
};

export const createLead = async (lead: Lead) => {
  try {
    const score = calculateScore(lead.email, lead.source);
    const tier = getTier(score);

    // ✅ THIS is your enriched lead
    const enrichedLead = {
      ...lead,
      score,
      tier,
    };

    leads.push(enrichedLead);

    await axios.post("http://localhost:5678/webhook/lead-created", {
      ...enrichedLead,
      timestamp: new Date().toISOString(),
      event: "LEAD_CREATED",
    });

    return enrichedLead;
  } catch (error: any) {
    console.error("n8n webhook error:", error.message);
    throw new Error("Failed to send lead to n8n");
  }
};

export const getLeads = () => {
  return leads;
};