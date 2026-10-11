import "./SportsMeetDetails.css";

function SportsMeetDetails({ setPage }) {
  return (
    <div className="sports-details-page">
      <div className="sports-details-box">
        <h1>Sports Meet</h1>

        <p>
          Participate in exciting indoor and outdoor sports
          competitions during our college sports meet.
        </p>

        <div className="event-info">
          <p><strong>Date:</strong> 25 October 2026</p>
          <p><strong>Time:</strong> 9:00 AM</p>
          <p><strong>Venue:</strong> Sports Complex</p>
          <p><strong>Organizer:</strong> Sports Committee</p>
        </div>

        <button onClick={() => setPage("eventRegistration")}>
          Register for Event
        </button>

        <button
          className="back-btn"
          onClick={() => setPage("events")}
        >
          Back to Events
        </button>
      </div>
    </div>
  );
}

export default SportsMeetDetails;