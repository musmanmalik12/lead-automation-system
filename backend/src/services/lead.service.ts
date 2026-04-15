import axios from "axios";
import { Lead } from "../types/lead";

const leads: Lead[] = [];

export const createLead = async (lead: Lead) => {
  try {
    leads.push(lead);

    await axios.post(
      "http://localhost:5678/webhook/lead-created",
      {
        ...lead,
        timestamp: new Date().toISOString(),
      },
      {
        timeout: 5000, 
      }
    );

    return lead;
  } catch (error: any) {
    console.error("n8n webhook error:", error.message);
    throw new Error("Failed to send lead to n8n");
  }
};

export const getLeads = () => {
  return leads;
};