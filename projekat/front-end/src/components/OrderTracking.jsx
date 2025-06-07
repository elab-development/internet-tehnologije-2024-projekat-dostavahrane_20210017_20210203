import React, { useEffect, useState } from "react";

function OrderTracking({ onClose }) {
  const [status, setStatus] = useState("Učitavanje statusa...");

  
  useEffect(() => {
    const statuses = [
      "Porudžbina primljena",
      "Priprema u toku",
      "Vozač je na putu",
      "Porudžbina isporučena"
    ];

    let index = 0;
    const interval = setInterval(() => {
      setStatus(statuses[index]);
      index++;
      if (index === statuses.length) clearInterval(interval);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="order-tracking-container">
      <button className="btn-close" onClick={onClose} aria-label="Zatvori praćenje porudžbine">
        &times;
      </button>

      <h2>Praćenje porudžbine</h2>

      <div className="status-line">
        <div className={`status-step ${status === "Porudžbina primljena" || status !== "Učitavanje statusa..." ? "active" : ""}`}>
          <div className="circle">1</div>
          <p>Primljena</p>
        </div>

        <div className={`status-step ${status === "Priprema u toku" || ["Vozač je na putu", "Porudžbina isporučena"].includes(status) ? "active" : ""}`}>
          <div className="circle">2</div>
          <p>Priprema</p>
        </div>

        <div className={`status-step ${status === "Vozač je na putu" || status === "Porudžbina isporučena" ? "active" : ""}`}>
          <div className="circle">3</div>
          <p>Vozač</p>
        </div>

        <div className={`status-step ${status === "Porudžbina isporučena" ? "active" : ""}`}>
          <div className="circle">4</div>
          <p>Isporuka</p>
        </div>
      </div>

      <p className="current-status">{status}</p>
    </div>
  );
}

export default OrderTracking;

