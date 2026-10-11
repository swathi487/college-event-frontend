import "./AdminDashboard.css";

function AdminDashboard({ setPage }) {
  return (
    <div className="admin-page">
      <div className="admin-box">
        <h1>Admin Dashboard</h1>

        <p className="admin-subtitle">
          Manage college events and registrations
        </p>

        <div className="admin-actions">
          <button onClick={() => setPage("addEvent")}>
  Add Event
</button>
          <button onClick={() => setPage("editEvent")}>
  Edit Event
</button>
          <button
  onClick={() => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (confirmDelete) {
      alert("Event deleted successfully.");
    }
  }}
>
  Delete Event
</button>
         <button onClick={() => setPage("viewRegistrations")}>
  View Registrations
</button>
        </div>

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;