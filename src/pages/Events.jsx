import { useEffect, useState } from "react";
import "./Events.css";

function Events({ setPage }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="events-page">

      <header className="events-header">
        <h1>College Events</h1>
        <p>Discover and participate in upcoming college events</p>
      </header>

      <section className="event-list">

        {events.map((event) => (
          <div className="event-card" key={event.id}>

            <h2>{event.name}</h2>

            <p>{event.description}</p>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Time:</strong> {event.time}
            </p>

            <p>
              <strong>Venue:</strong> {event.venue}
            </p>

            <button onClick={() => setPage("eventDetails")}>
              Register Now
            </button>

          </div>
        ))}

      </section>

      <button onClick={() => setPage("myEvents")}>
        My Registered Events
      </button>

    </div>
  );
}

export default Events;