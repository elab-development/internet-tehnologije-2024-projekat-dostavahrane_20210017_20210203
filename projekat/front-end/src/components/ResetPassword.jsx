import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setMessage("Lozinke se ne poklapaju.");
    return;
  }

  if (password.length < 8) {
    setMessage("Lozinka mora imati najmanje 8 karaktera.");
    return;
  }

  try {
    await axios.post("http://127.0.0.1:8000/api/reset-password", {
      token,
      email,
      password,
      password_confirmation: confirmPassword,
    });
    setMessage("Lozinka uspešno resetovana.");
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      setMessage(err.response.data.message);
    } else {
      setMessage("Došlo je do greške. Proverite podatke.");
    }
    console.error(err);
  }
};
  return (
    <div className="reset-password-container resetform-container">
  <h2>Resetuj lozinku</h2>
  <form onSubmit={handleSubmit}>
    <input
      className="resetform-input"
      type="password"
      placeholder="Nova lozinka"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <input
      className="resetform-input"
      type="password"
      placeholder="Potvrdi lozinku"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
    <button className="resetbutton" type="submit">Resetuj lozinku</button>
  </form>
  {message && <p>{message}</p>}
</div>
  );
}

export default ResetPassword;
