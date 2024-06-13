import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import { heatmapLayer } from "../map-style";
import { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicWRvZ2dlcjY5IiwiYSI6ImNseDd1MWZ4ZzBrdmsyanB2d3E4MHY4ejQifQ.aXV61OY1jofAOXK_28omhA";

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const features = featureCollection.features.filter((feature) => {
    const featureDate = new Date(feature.properties.time);
    return (
      featureDate.getFullYear() === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    );
  });
  return { type: "FeatureCollection", features };
}

export default function Heatmap({
  keyProp,
  initialLatitude,
  initialLongitude,
  initialZoom,
}) {
  const [allDays, setAllDays] = useState(true);
  const [timeRange, setTimeRange] = useState([0, 0]);
  const [selectedTime, setSelectedTime] = useState(0);
  const [earthquakes, setEarthQuakes] = useState(null);

  useEffect(() => {
    const geojsonUrl = "output.geojson";
    console.log(`Fetching GeoJSON data from ${geojsonUrl}`);

    fetch(geojsonUrl)
      .then((resp) => {
        console.log("Fetch response:", resp);
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.text(); // Fetch as text first for debugging
      })
      .then((text) => {
        try {
          const json = JSON.parse(text); // Try parsing the text as JSON
          console.log("Fetched GeoJSON data:", json);
          setEarthQuakes(json);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          throw new Error("Invalid JSON format");
        }
      })
      .catch((err) => {
        console.error(`Could not load data from ${geojsonUrl}`, err);
      });
  }, []);

  const data = useMemo(() => {
    if (!earthquakes) return null;
    return allDays
      ? earthquakes
      : filterFeaturesByDay(earthquakes, selectedTime);
  }, [earthquakes, allDays, selectedTime]);

  return (
    <div id="map" className="w-30% h-96">
      <MapGL
        key={keyProp}
        initialViewState={{
          latitude: initialLatitude,
          longitude: initialLongitude,
          zoom: initialZoom,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        attributionControl={false}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {data && (
          <Source
            type="geojson"
            data={data as FeatureCollection<Geometry, GeoJsonProperties>}
          >
            <Layer {...heatmapLayer} />
          </Source>
        )}
      </MapGL>
    </div>
  );
}
