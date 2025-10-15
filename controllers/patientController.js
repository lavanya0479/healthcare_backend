import Patient from "../models/Patient.js";

// Create new patient
export const createPatient = async (req, res) => {
  const { name, age, gender, contact } = req.body;
  try {
    const patient = await Patient.create({
      name,
      age,
      gender,
      contact,
      createdBy: req.user.id,
    });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all patients created by logged-in user
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ createdBy: req.user.id });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get patient by ID
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update patient
export const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete patient
export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
