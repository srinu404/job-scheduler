

# Job Scheduler & Automation System

A **full-stack job scheduling application** built using **Node.js, Express, MongoDB, node-cron, and React**. Users can create scheduled jobs from a web UI, store them in MongoDB, and execute them automatically based on cron expressions.

---

## 🚀 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* node-cron
* CORS

### Frontend

* React (Create React App)
* Fetch API

---

## 📁 Project Structure

```
job-scheduler/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── jobController.js
│   ├── models/
│   │   └── Job.js
│   ├── routes/
│   │   └── jobRoutes.js
│   ├── scheduler/
│   │   └── scheduler.js
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobForm.js
│   │   │   └── JobList.js
│   │   └── App.js
│
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

* Node.js (v18+ recommended)
* MongoDB Community Server
* MongoDB Compass (optional but recommended)
* VS Code

---

## 🛠 Backend Setup

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Install CORS

```bash
npm install cors
```

### 3️⃣ Configure MongoDB

Ensure MongoDB is running on:

```
mongodb://127.0.0.1:27017
```

Database name used:

```
jobscheduler
```

---

## 📄 Backend Important Files

### `backend/app.js`

```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', require('./routes/jobRoutes'));

module.exports = app;
```

---

### `backend/server.js`

```js
const app = require('./app');
const connectDB = require('./config/db');
const startScheduler = require('./scheduler/scheduler');

const PORT = 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    startScheduler();
  });
};

startServer();
```

---

## ▶️ Start Backend

```bash
npm run dev
```

Expected output:

```
MongoDB Connected
Server running on port 5000
```

---

## 🌐 Frontend Setup (React)

### 1️⃣ Create React App

```bash
npx create-react-app frontend
cd frontend
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

### 2️⃣ Replace Default `App.js`

The default React template **must be replaced**.

### `frontend/src/App.js`

```js
import { useEffect, useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);

  const loadJobs = async () => {
    const res = await fetch('http://localhost:5000/api/jobs');
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Job Scheduler Dashboard</h1>
      <JobForm refreshJobs={loadJobs} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
```

---

## 🧪 Using the Application

1. Open browser:

```
http://localhost:3000
```

2. Create a job using the form
3. Jobs are stored in MongoDB
4. Jobs execute automatically using cron

---

## ⏰ Sample Cron Expressions

```
*/1 * * * *   → Every minute
0 * * * *     → Every hour
0 0 * * *     → Daily at midnight
```

---

## 🧠 Key Concepts (Interview Ready)

* MongoDB databases are created lazily on first insert
* CORS is required for frontend-backend communication
* node-cron executes scheduled background jobs
* React frontend consumes REST APIs

---

## ✅ Final Status

* Backend API ✔️
* MongoDB Integration ✔️
* Job Scheduler ✔️
* React Frontend ✔️
* CORS Enabled ✔️

---

## 🚀 Future Enhancements

* Pause / Resume jobs
* Job execution logs
* Delete / Update jobs
* Authentication
* Docker deployment

---


## Mango DB
<img width="1920" height="1080" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/81aa1781-d20c-4352-ba02-ec3cf8deccda" />


## Frontend
<img width="1920" height="1080" alt="Screenshot (28)" src="https://github.com/user-attachments/assets/3d034cff-7353-4894-8790-58c0d134b7d8" />


## Backend
<img width="1920" height="1080" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/6d26aa5e-2485-4728-8fb7-64eb73960022" />


## Running Website
<img width="1920" height="1080" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/042ada71-62d4-47c5-90ee-0fa058cdf895" />




## 👨‍💻 Author

M Srinivas Reddy

---

🎉 **This project is assignment-ready and interview-ready.**
