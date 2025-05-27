import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../photos/pin.png";

const MyMap = () => {
  const [position, setPosition] = useState([44.8176, 20.4569]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);


  const restaurants = [
    { lat: 44.871072, lon: 20.642723, name: "Borneo", address: "Njegoseva, Pancevo", phone: "013333444"},
    { lat: 44.8690053, lon: 20.633523, name: "Vetrenjaca", address: "Tamiski kej, Pancevo", phone: "013222333" },
    { lat: 44.8040303, lon: 20.4635937, name: "Hilton", address: "Beogradska ulica, Beograd", phone: "011343555"},
    { lat: 44.8715112, lon: 20.6351265, name: "Poco Loco", address: "Brace Jovanovica, Pancevo", phone: "013343777" },
  ];

  const createMarkerIcon = (iconName) => {
    return new L.Icon({
      iconUrl: iconName,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  };

  const handleRestaurantSelect = (e) => {
    const selected = restaurants.find(
      (restaurant) => restaurant.name === e.target.value
    );
    if (selected) {
      setPosition([selected.lat, selected.lon]);
      setSelectedRestaurant(selected);
    }
  };

  const MoveMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      if (position) {
        map.panTo(position);
      }
    }, [position, map]);

    return null;
  };

  return (
    <div className="map">
      <select onChange={handleRestaurantSelect} defaultValue="">
        <option value="" disabled>
          Izaberite restoran
        </option>
        {restaurants.map((restaurant, index) => (
          <option key={index} value={restaurant.name}>
            {restaurant.name}
          </option>
        ))}
      </select>
      <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MoveMap position={position} />

        {selectedRestaurant && (
          <Marker position={position} icon={createMarkerIcon(icon)}>
            <Popup>
              <div>
                <h4>{selectedRestaurant.name}</h4>
                <p>Adresa: {selectedRestaurant.address}</p>
                <p>Telefon: {selectedRestaurant.phone}</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MyMap;

