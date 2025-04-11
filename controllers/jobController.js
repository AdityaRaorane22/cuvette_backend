const Job = require("../models/Job");

// Add a new job
exports.addJob = async (req, res) => {
  try {
    const { company, role, status, date, link } = req.body;
    const job = new Job({ company, role, status, date, link });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.error("Add Job Error:", error.message);
    res.status(500).json({ message: "Failed to add job", error: error.message });
  }
};

// Get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to get jobs", error: error.message });
  }
};

// Update job status
exports.updateJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const job = await Job.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status", error: error.message });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: "Job deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete job", error: error.message });
  }
};
