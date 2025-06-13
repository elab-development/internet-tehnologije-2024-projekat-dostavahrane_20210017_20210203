import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../photos/pin.png";
import { Link } from "react-router-dom";
import axios from "axios";

const MyMap = () => {
  const [position, setPosition] = useState([44.8176, 20.4569]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [zoom, setZoom] = useState(13);


  useEffect(() => {
    axios.get("/api/restaurants")
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error("Greška prilikom dohvatanja restorana:", error);
      });
  }, []);

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
      setPosition([selected.latitude, selected.longitude]);
      setSelectedRestaurant(selected);
      setZoom(20);
    }
  };

  const MoveMap = ({ position, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, zoom);
    }
  }, [position, zoom, map]);

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
        
        <MoveMap position={position} zoom={zoom} />

        {restaurants.map((restaurant) => (
          restaurant.latitude && restaurant.longitude && (
            <Marker
              key={restaurant.id}
              position={[restaurant.latitude, restaurant.longitude]}
              icon={createMarkerIcon(icon)}
              eventHandlers={{
                click: () => {
                  setSelectedRestaurant(restaurant);
                  setPosition([restaurant.latitude, restaurant.longitude]);
                },
              }}
            >
              <Popup>
                <div>
                  <h4>
                    <Link to={`/restaurants/${restaurant.id}`}>
                      {restaurant.name}
                    </Link>
                  </h4>
                  <p>Adresa: {restaurant.address}</p>
                  <p>Telefon: {restaurant.phone}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default MyMap;


