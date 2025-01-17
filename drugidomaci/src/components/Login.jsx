import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <h1>Prijavi se</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Unesite email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lozinka:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Unesite lozinku"
            value={formData.password}
            onChange={handleChange}
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