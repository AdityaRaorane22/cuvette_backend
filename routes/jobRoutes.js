const express = require("express");
const router = express.Router();
const {
  addJob,
  getJobs,
  updateJobStatus,
  deleteJob
} = require("../controllers/jobController");

router.post("/jobs", addJob);
router.get("/jobs", getJobs);
router.patch("/jobs/:id", updateJobStatus);
router.delete("/jobs/:id", deleteJob);

module.exports = router;
