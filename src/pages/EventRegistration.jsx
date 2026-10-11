import { useState } from "react";
import "./EventRegistration.css";

function EventRegistration({ setPage }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [collegeId, setCollegeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const registration = {
      fullName: fullName,
      email: email,
      collegeId: collegeId,
      eventName: "Technical Fest"
    };

    fetch("http://localhost:8080/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registration)
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Registration successful!");
        setPage("myEvents");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert("Registration failed.");
      });
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <h1>Event Registration</h1>
        <h2>Technical Fest</h2>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>College ID</label>
          <input
            type="text"
            placeholder="Enter your college ID"
            value={collegeId}
            onChange={(e) => setCollegeId(e.target.value)}
            required
          />

          <button type="submit">
            Confirm Registration
          </button>

        </form>

        <button
          className="back-btn"
          onClick={() => setPage("eventDetails")}
        >
          Back to Event
        </button>

      </div>
    </div>
  );
}

export default EventRegistration;