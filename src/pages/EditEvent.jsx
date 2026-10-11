import "./EditEvent.css";

function EditEvent({ setPage }) {
  return (
    <div className="edit-event-page">
      <div className="edit-event-box">
        <h1>Edit Event</h1>

        <form>
          <label>Event Name</label>
          <input
            type="text"
            defaultValue="Technical Fest"
          />

          <label>Date</label>
          <input
            type="date"
            defaultValue="2026-10-20"
          />

          <label>Time</label>
          <input
            type="time"
            defaultValue="10:00"
          />

          <label>Venue</label>
          <input
            type="text"
            defaultValue="College Auditorium"
          />

          <label>Description</label>
          <textarea
            defaultValue="Coding competitions, workshops and technical activities."
          ></textarea>

          <button type="submit">
            Update Event
          </button>
        </form>

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

export default EditEvent;