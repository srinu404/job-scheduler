const Job = require('../models/Job');


exports.createJob = async (req, res) => {
try {
const job = await Job.create(req.body);
res.status(201).json(job);
} catch (error) {
res.status(400).json({ error: error.message });
}
};


exports.getJobs = async (req, res) => {
const jobs = await Job.find();
res.json(jobs);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job deleted' });
};
