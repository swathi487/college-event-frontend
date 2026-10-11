import "./Register.css";

function Register({ setPage }) {
  return (
    <div className="register-page">
      <div className="register-box">
        <h1>College Events</h1>
        <h2>Create Account</h2>

        <form>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => setPage("login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;