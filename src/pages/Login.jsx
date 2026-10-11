import "./Login.css";


function Login({ setPage }) {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>College Events</h1>
        <h2>Login</h2>

        <form>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="button" onClick={() => setPage("home")}>
  Login
</button>
        </form>

        <p>
  Don't have an account?{" "}
  <span onClick={() => setPage("register")}>
    Register
  </span>
</p>
      </div>
    </div>
  );
}

export default Login;