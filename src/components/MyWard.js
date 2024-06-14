// components/MyWard.jsx
import React, { useState } from "react";
import { useMap } from "react-leaflet";
import * as turf from "@turf/turf";
import wardGeoJson from "../path/to/wardGeoJson.geojson"; // Adjust path to your geojson file

const MyWard = ({ setSelectedWard }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [ward, setWard] = useState("");
  const map = useMap();

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
        determineWard([position.coords.longitude, position.coords.latitude]);
      });
    }
  };

  const determineWard = (coords) => {
    const point = turf.point(coords);
    const foundWard = wardGeoJson.features.find((feature) =>
      turf.booleanPointInPolygon(point, feature)
    );
    if (foundWard) {
      setWard(foundWard.properties.name); // Assuming the ward name is in properties.name
    } else {
      setWard("Unknown");
    }
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Convert address to coordinates (e.g., using a geocoding service like     )
    // Then call determineWard with the resulting coordinates
  };

  return (
    <div>
      <button onClick={getGeolocation}>Get My Location</button>
      {location && <p>Your location: {location.join(", ")}</p>}
      <form onSubmit={handleAddressSubmit}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address or postal code"
        />
        <button type="submit">Find Ward</button>
      </form>
      {ward && (
        <div>
          <p>Your ward is {ward}</p>
          <button onClick={() => setSelectedWard(ward)}>Go to Ward</button>
        </div>
      )}
    </div>
  );
};

export default MyWard;
