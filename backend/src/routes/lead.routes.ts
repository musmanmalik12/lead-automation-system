import { Router } from "express";
import { addLead, fetchLeads } from "../controllers/lead.controller";

const router = Router();

router.post("/", addLead);
router.get("/", fetchLeads);

export default router;