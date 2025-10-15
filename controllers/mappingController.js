import Mapping from "../models/Mapping.js";

// Assign doctor to patient
export const assignDoctor = async (req, res) => {
  const { patient, doctor } = req.body;
  if (!patient || !doctor) {
    return res.status(400).json({ message: "Patient and doctor IDs are required" });
  }

  try {
    const mapping = await Mapping.create({
      patient,
      doctor,
      assignedBy: req.user.id,
    });
    res.status(201).json(mapping);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all mappings
export const getAllMappings = async (req, res) => {
  try {
    const mappings = await Mapping.find()
      .populate("patient", "name")
      .populate("doctor", "name");
    res.json(mappings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all doctors assigned to a specific patient
export const getDoctorsByPatient = async (req, res) => {
  try {
    const mappings = await Mapping.find({ patient: req.params.patientId })
      .populate("doctor", "name");
    res.json(mappings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Remove a doctor from a patient
export const removeMapping = async (req, res) => {
  try {
    const mapping = await Mapping.findByIdAndDelete(req.params.id);
    if (!mapping) return res.status(404).json({ message: "Mapping not found" });
    res.json({ message: "Mapping deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
