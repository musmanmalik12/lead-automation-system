import { Request, Response } from "express";
import { createLead, getLeads } from "../services/lead.service";

export const addLead = async (req: Request, res: Response) => {
  const { name, email, source } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "name and email required" });
  }

  try {
    const lead = await createLead({ name, email, source });

    return res.status(201).json({
      message: "Lead created",
      lead,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to create lead",
    });
  }
};

export const fetchLeads = (req: Request, res: Response) => {
  return res.json(getLeads());
};