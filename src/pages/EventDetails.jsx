import "./EventDetails.css";

function EventDetails({ setPage }) {
  return (
    <div className="event-details-page">
      <div className="event-details-box">
        <h1>Technical Fest</h1>

        <p>
          Join us for an exciting technical fest featuring coding
          competitions, workshops and other technical activities.
        </p>

        <div className="event-info">
          <p><strong>Date:</strong> 20 October 2026</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Venue:</strong> College Auditorium</p>
          <p><strong>Organizer:</strong> Computer Science Department</p>
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

export default EventDetails;