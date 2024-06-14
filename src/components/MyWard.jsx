import * as turf from "@turf/turf";
import { useState, useEffect } from "react";

const MyWard = ({ selectWard }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [wardGeoJson, setWardGeoJson] = useState(null);
  const [error, setError] = useState("");
  const [ward, setWard] = useState(null);

  useEffect(() => {
    fetch("/HowSafe/wards.geojson")
      .then((response) => response.json())
      .then((data) => {
        setWardGeoJson(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [position.coords.longitude, position.coords.latitude];
          setLocation([position.coords.latitude, position.coords.longitude]);
          determineWard(coords);
        },
        (err) => setError("Unable to retrieve your location")
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const determineWard = (coords) => {
    if (!wardGeoJson) return;

    const point = turf.point(coords);
    const foundWard = wardGeoJson.features.find((feature) =>
      turf.booleanPointInPolygon(point, feature.geometry)
    );
    if (foundWard) {
      setWard(foundWard.properties.NAME);
      changeWard(foundWard.properties.NAME);
    } else {
      setError("Ward not found.");
    }
  };

  const changeWard = (ward) => {
    selectWard(ward);
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setWard(null);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const coords = [parseFloat(lon), parseFloat(lat)];
        setLocation([parseFloat(lat), parseFloat(lon)]);
        determineWard(coords);
      } else {
        setError("Address not found. Please try again.");
      }
    } catch (err) {
      setError("Failed to fetch geocoding data. Please try again later.");
      console.error("Error fetching geocoding data:", err);
    }
  };

  return (
    <div className="w-full  mx-auto">
      <div className="mb-4">
        <h2 className="text-xl font-light text-[#052E41]">Find Your Ward</h2>
        <p className="text-[#1c2a30] font-light text-sm">
          Enter your address or location to find your ward.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={getGeolocation}
            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md shadow-sm"
          >
            <p className="text-[#1c2a30] font-light text-md ">
              Get My Location
            </p>
          </button>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address or Postal Code"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-[#1c2a30] font-light text-md"
          />
        </div>
        <button
          onClick={handleAddressSubmit}
          className="w-full px-4 py-2 bg-[#0a394e] text-white text-xl font-custom-serif tracking-wider capitalize rounded-lg hover:bg-[#0f3f52] border border-[#0b1c24] shadow"
        >
          Find Ward
        </button>
      </div>
      {error && (
        <p className="text-md font-light pt-3 text-red-600"> {error}</p>
      )}
      {location && (
        <div className="mt-4">
          <p className="font-light text-[#052E41] text-md">
            Your location: {location.join(", ")}
          </p>
          <br />
          {ward && (
            <p className="text-[#052E41] font-light text-lg">
              You are in ward{" "}
              <a
                href="#"
                onClick={() => changeWard(ward)}
                className="underline text-[#03606F]  text-2xl font-custom-serif tracking-wider"
              >
                {ward}
              </a>
              .
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyWard;
