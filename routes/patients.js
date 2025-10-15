import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/", protect, createPatient);
router.get("/", protect, getAllPatients);
router.get("/:id", protect, getPatientById);
router.put("/:id", protect, updatePatient);
router.delete("/:id", protect, deletePatient);

export default router;
