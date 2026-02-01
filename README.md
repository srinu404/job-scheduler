

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
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3d70782d-343c-49ca-b78a-7925d59e2766" />

## Frontend
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/12067cc6-53e5-4e8a-acf9-925978a438f2" />

## Backend
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/492878e8-2090-471b-b7b4-a1626aa10f80" />

## Running Website
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/15ca07b3-60e2-495e-8e4b-7a32aa35a946" />



## 👨‍💻 Author

M Srinivas Reddy

---

🎉 **This project is assignment-ready and interview-ready.**
