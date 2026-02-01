const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
schedule: {
type: String,
required: true
},
task: {
type: String,
required: true
},
status: {
type: String,
default: 'active'
},
lastRun: {
type: Date
}
});


module.exports = mongoose.model('Job', JobSchema);