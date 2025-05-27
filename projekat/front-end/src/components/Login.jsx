import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  axios.post("http://127.0.0.1:8000/api/login", formData)
    .then((res) => {
      const userData = {
        username: res.data.username,
        access_token: res.data.access_token,
        email: formData.email, 
      };
      console.log(res.data);
      if(res.data.message === 'Login successful') {
        window.sessionStorage.setItem("auth_token", res.data.access_token);
      }
      onLogin(userData); 
      navigate("/profile");
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        alert("Email ili lozinka nisu ispravni.");
      } else {
        console.error("Greška prilikom prijave:", error);
        alert("Došlo je do greške. Pokušajte ponovo.");
      }
    });
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
