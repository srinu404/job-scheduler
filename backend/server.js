const app = require('./app');
const connectDB = require('./config/db');
const startScheduler = require('./scheduler/scheduler');


connectDB();


app.listen(5000, () => {
console.log('Server running on port 5000');
startScheduler();
});