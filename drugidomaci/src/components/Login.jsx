import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <h1>Prijavi se</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Unesite email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lozinka:</label>
          <input
            type="password"
            id="password"
            placeholder="Unesite password"
            required
          />
        </div>
        <button type="submit" className="btnLogin">
          Prijava
        </button>
      </form>
      <p>
        Nemaš nalog?{" "}
        <Link to="/register" className="register-link">
          Registruj se
        </Link>
      </p>
    </div>
  );
}

export default Login;
