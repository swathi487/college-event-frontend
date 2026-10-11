import { useState } from "react";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Register from "./pages/Register";
import EventDetails from "./pages/EventDetails";
import CulturalFestDetails from "./pages/CulturalFestDetails";
import SportsMeetDetails from "./pages/SportsMeetDetails";
import EventRegistration from "./pages/EventRegistration";
import MyEvents from "./pages/MyEvents";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import ViewRegistrations from "./pages/ViewRegistrations";
import "./App.css";


function App() {
  const [page, setPage] = useState("home");
  if (page === "login") {
    return <Login setPage={setPage} />;
  }

  if (page === "events") {
  return <Events setPage={setPage} />;
}
  if (page === "register") {
  return <Register setPage={setPage} />;
}
if (page === "eventDetails") {
  return <EventDetails setPage={setPage} />;
}
if (page === "culturalFestDetails") {
  return <CulturalFestDetails setPage={setPage} />;
}
if (page === "sportsMeetDetails") {
  return <SportsMeetDetails setPage={setPage} />;
}
if (page === "eventRegistration") {
  return <EventRegistration setPage={setPage} />;
}
if (page === "myEvents") {
  return <MyEvents setPage={setPage} />;
}
if (page === "admin") {
  return <AdminDashboard setPage={setPage} />;
}
if (page === "addEvent") {
  return <AddEvent setPage={setPage} />;
}
if (page === "editEvent") {
  return <EditEvent setPage={setPage} />;
}
if (page === "viewRegistrations") {
  return <ViewRegistrations setPage={setPage} />;
}

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">College Events</div>

        <nav>
          <a href="#home">Home</a>
          <button
  className="nav-link"
  onClick={() => setPage("events")}
>
  Events
</button>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
  className="login-btn"
  onClick={() => setPage("login")}
>
  Login
</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Online College Event Management System</h1>

          <p>
            Discover college events, register for exciting programs,
            and stay connected with your campus community.
          </p>

         <button
  className="explore-btn"
  onClick={() => setPage("events")}
>
  Explore Events
</button>
        </div>
      </section>

      <section className="events" id="events">
        <h2>Upcoming Events</h2>

        <div className="event-container">
          <div className="event-card">
            <h3>Technical Fest</h3>
            <p>Workshops, coding competitions and technical activities.</p>
            <button onClick={() => setPage("eventDetails")}>
  View Details
</button>
          </div>

          <div className="event-card">
            <h3>Cultural Fest</h3>
            <p>Music, dance, arts and cultural performances.</p>
            <button onClick={() => setPage("culturalFestDetails")}>
  View Details
</button>
          </div>

          <div className="event-card">
            <h3>Sports Meet</h3>
            <p>Participate in exciting indoor and outdoor sports.</p>
            <button onClick={() => setPage("sportsMeetDetails")}>
  View Details
</button>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Our System</h2>

        <p>
          The Online College Event Management System helps students
          discover, register and participate in college events easily.
        </p>
      </section>

      <footer id="contact">
        <p>© 2026 Online College Event Management System</p>
      </footer>
    </div>
  );
}



export default App;

