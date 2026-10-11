import { useEffect, useState } from "react";
import "./MyEvents.css";

function MyEvents({ setPage }) {
const [registrations, setRegistrations] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
fetch("http://localhost:8080/api/registrations")
.then((response) => {
if (!response.ok) {
throw new Error("Failed to fetch registrations");
}
return response.json();
})
.then((data) => {
setRegistrations(data);
})
.catch((err) => {
console.error("Error fetching registrations:", err);
setError("Could not load registrations. Please try again.");
})
.finally(() => {
setLoading(false);
});
}, []);

return (
<div className="my-events-page">
<div className="my-events-box">
<h1>My Registered Events</h1>

    {loading && <p>Loading registrations...</p>}

    {error && <p>{error}</p>}

    {!loading && !error && registrations.length === 0 && (
      <p>You have not registered for any events yet.</p>
    )}

    {!loading &&
      !error &&
      registrations.map((registration) => (
        <div className="registered-event" key={registration.id}>
          <h2>{registration.eventName}</h2>

          <p>
            <strong>Name:</strong> {registration.fullName}
          </p>

          <p>
            <strong>Email:</strong> {registration.email}
          </p>

          <p>
            <strong>College ID:</strong> {registration.collegeId}
          </p>

          <p className="status">
            Registration Status: Registered
          </p>
        </div>
      ))}

    <button
      className="back-btn"
      onClick={() => setPage("events")}
    >
      Back to Events
    </button>

    <button
      className="back-btn"
      onClick={() => setPage("admin")}
    >
      Admin Dashboard
    </button>
  </div>
</div>

);
}

export default MyEvents;