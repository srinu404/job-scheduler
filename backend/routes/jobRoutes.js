const express = require('express');
const { createJob, getJobs, deleteJob } = require('../controllers/jobController');

const router = express.Router();

router.post('/jobs', createJob);
router.get('/jobs', getJobs);
router.delete('/jobs/:id', deleteJob);

module.exports = router;
