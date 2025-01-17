import React from "react";

function UserProfile({ userData }) {
  const firstLetter = userData.username.charAt(0).toUpperCase();

  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <span>{firstLetter}</span>
      </div>
      <h1>Dobrodošli, {userData.username}!</h1>
      <div className="profile-orders">
        <p>Broj narudžbi: <strong>0</strong></p>
      </div>
    </div>
  );
}

export default UserProfile;