import { useState } from 'react';

const JobForm = ({ refreshJobs }) => {
  const [name, setName] = useState('');
  const [schedule, setSchedule] = useState('');
  const [task, setTask] = useState('');

  const submitJob = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, schedule, task })
    });

    refreshJobs();
    setName('');
    setSchedule('');
    setTask('');
  };

  return (
    <form className="card" onSubmit={submitJob}>
      <h2>Create Job</h2>

      <input
        placeholder="Job Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Cron (*/1 * * * *)"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
        required
      />

      <input
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />

      <button type="submit">Create Job</button>
    </form>
  );
};

export default JobForm;
