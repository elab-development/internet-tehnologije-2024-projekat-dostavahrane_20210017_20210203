import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_conf: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return passwordRegex.test(password);
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!validatePassword(formData.password)) {
    setError(
      "Lozinka mora imati najmanje 8 karaktera, jedno veliko, jedno malo slovo, jedan broj i specijalan znak."
    );
    return;
  }

  if (formData.password !== formData.password_conf) {
    setError("Lozinka i potvrda lozinke se ne poklapaju.");
    return;
  }


  axios.post("http://127.0.0.1:8000/api/register", formData)
    .then((res) => {
      console.log("Uspešna registracija:", res.data);

      alert("Uspešna registracija! Sada se možete prijaviti.");
      navigate("/login");
    })
    .catch((error) => {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        console.error("Greška prilikom registracije:", error);
        setError("Došlo je do greške. Pokušajte ponovo.");
      }
    });
};
  return (
    <div className="register-container">
      <h1>Registruj se</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Korisničko ime:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Unesite username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="password">Potvrda lozinke:</label>
          <input
            type="password"
            id="password_conf"
            name="password_conf"
            placeholder="Unesite ponovo lozinku"
            value={formData.password_conf}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
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
