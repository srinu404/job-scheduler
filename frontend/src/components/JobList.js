const JobList = ({ jobs, refreshJobs }) => {
  const deleteJob = async (id) => {
    await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: 'DELETE'
    });
    refreshJobs();
  };

  return (
    <div className="card">
      <h2>Scheduled Jobs</h2>
      {jobs.length === 0 && <p>No jobs scheduled</p>}
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <div>
              <b>{job.name}</b>
              <span>{job.schedule}</span>
              <small>{job.task}</small>
            </div>
            <button className="delete" onClick={() => deleteJob(job._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
