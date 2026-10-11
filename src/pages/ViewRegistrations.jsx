import "./ViewRegistrations.css";

function ViewRegistrations({ setPage }) {
  return (
    <div className="registrations-page">
      <div className="registrations-box">
        <h1>Event Registrations</h1>
        <h2>Technical Fest</h2>

        <div className="registration-list">
          <div className="student-registration">
            <p><strong>Name:</strong> Rahul Kumar</p>
            <p><strong>Email:</strong> rahul@example.com</p>
            <p><strong>College ID:</strong> CSE202601</p>
          </div>

          <div className="student-registration">
            <p><strong>Name:</strong> Priya Sharma</p>
            <p><strong>Email:</strong> priya@example.com</p>
            <p><strong>College ID:</strong> CSE202602</p>
          </div>
        </div>

        <button
          className="back-btn"
          onClick={() => setPage("admin")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ViewRegistrations;