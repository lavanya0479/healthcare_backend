import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  assignDoctor,
  getAllMappings,
  getDoctorsByPatient,
  removeMapping,
} from "../controllers/mappingController.js";

const router = express.Router();

router.post("/", protect, assignDoctor);
router.get("/", protect, getAllMappings);
router.get("/:patientId", protect, getDoctorsByPatient);
router.delete("/:id", protect, removeMapping);

export default router;
