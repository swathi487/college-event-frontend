import "./AddEvent.css";

function AddEvent({ setPage }) {
  return (
    <div className="add-event-page">
      <div className="add-event-box">
        <h1>Add New Event</h1>

        <form>
          <label>Event Name</label>
          <input
            type="text"
            placeholder="Enter event name"
          />

          <label>Date</label>
          <input type="date" />

          <label>Time</label>
          <input type="time" />

          <label>Venue</label>
          <input
            type="text"
            placeholder="Enter venue"
          />

          <label>Description</label>
          <textarea
            placeholder="Enter event description"
          ></textarea>

          <button type="submit">
            Add Event
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

export default AddEvent;