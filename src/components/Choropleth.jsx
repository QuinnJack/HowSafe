import * as React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { createRoot } from "react-dom/client";
import Map, { Source, Layer } from "react-map-gl";
import { dataLayer } from "./choropleth-style";
import { updatePercentiles } from "./utils";
import "./choropleth.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicWRvZ2dlcjY5IiwiYSI6ImNseDd1MWZ4ZzBrdmsyanB2d3E4MHY4ejQifQ.aXV61OY1jofAOXK_28omhA";

export default function Choropleth() {
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [normalization, setNormalization] = useState("percapita");
  useEffect(() => {
    /* global fetch */
    fetch("wards.geojson")
      .then((resp) => resp.json())
      .then((json) => setAllData(json))
      .catch((err) => console.error("Could not load data", err)); // eslint-disable-line
  }, []);

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];

    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  const data = useMemo(() => {
    return (
      allData &&
      updatePercentiles(allData, (f) => f.properties.crime[normalization])
    );
  }, [allData, normalization]);

  return (
    <div id="map" className="w-10% h-96">
      <Map
        initialViewState={{
          latitude: 45.2851,
          longitude: -75.7803,
          zoom: 8.2,
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={["data"]}
        attributionControl={false}
        onMouseMove={onHover}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
        {hoverInfo && (
          <div
            className="tooltip"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <div>Ward: {hoverInfo.feature.properties.NAME}</div>
            <div>
              Median Household Income: {hoverInfo.feature.properties.value}
            </div>
            <div>
              Percentile: {(hoverInfo.feature.properties.percentile / 8) * 100}
            </div>
          </div>
        )}
      </Map>
    </div>
  );
}
