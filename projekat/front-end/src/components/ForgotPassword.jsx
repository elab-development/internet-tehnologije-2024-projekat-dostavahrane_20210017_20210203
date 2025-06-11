import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/forgot-password", { email });
    setMessage("Link za resetovanje lozinke je poslat na email.");
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      setMessage(err.response.data.message);
    } else {
      setMessage("Greška prilikom slanja zahteva.");
    }
    console.error(err);
  }
};

  return (
  <div className="forgot-password-container resetform-container">
  <h2>Zaboravljena lozinka</h2>
  <form onSubmit={handleSubmit}>
    <input
      className="resetform-input"
      type="email"
      placeholder="Unesite svoj email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <button className="resetbutton" type="submit">Pošalji link</button>
  </form>
  {message && <p>{message}</p>}
</div>
  );
}

export default ForgotPassword;
