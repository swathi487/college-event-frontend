import "./CulturalFestDetails.css";

function CulturalFestDetails({ setPage }) {
  return (
    <div className="cultural-details-page">
      <div className="cultural-details-box">
        <h1>Cultural Fest</h1>

        <p>
          Enjoy music, dance, arts and amazing cultural performances
          during our college cultural fest.
        </p>

        <div className="event-info">
          <p><strong>Date:</strong> 20 October 2026</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Venue:</strong> Main Ground</p>
          <p><strong>Organizer:</strong> Cultural Committee</p>
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

export default CulturalFestDetails;