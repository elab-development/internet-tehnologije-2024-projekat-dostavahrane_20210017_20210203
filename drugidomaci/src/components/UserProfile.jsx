import React from "react";
import { useNavigate } from "react-router-dom";

function UserProfile({ userData, onLogout }) {
  const navigate = useNavigate();
  const firstLetter = userData.username.charAt(0).toUpperCase();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <span>{firstLetter}</span>
      </div>
      <h1>Dobrodošli, {userData.username}!</h1>
      <div className="profile-orders">
        <p>Broj narudžbi: <strong>{userData.orders || 0}</strong></p>
      </div>
      <button onClick={handleLogout} className="btn-logout">
        Odjavi se
      </button>
    </div>
  );
}

export default UserProfile;
