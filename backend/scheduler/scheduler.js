const cron = require('node-cron');
const Job = require('../models/Job');


const startScheduler = async () => {
const jobs = await Job.find({ status: 'active' });


jobs.forEach(job => {
cron.schedule(job.schedule, async () => {
console.log(`Running Job: ${job.name}`);
console.log(`Task: ${job.task}`);


job.lastRun = new Date();
await job.save();
});
});
};


module.exports = startScheduler;