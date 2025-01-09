import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <h1>Registruj se</h1>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="name">Korisničko ime:</label>
          <input type="text" id="name" placeholder="Unesite username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Unesite email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lozinka:</label>
          <input
            type="password"
            id="password"
            placeholder="Unesite lozinku"
            required
          />
        </div>
        <button type="submit" className="btnLogin">
          Registruj se
        </button>
      </form>
      <p>
        Već imaš nalog?{" "}
        <Link to="/login" className="login-link">
          Prijavi se
        </Link>
      </p>
    </div>
  );
}

export default Register;
