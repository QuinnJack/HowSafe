import type { HeatmapLayer } from "react-map-gl";

const MAX_ZOOM_LEVEL = 23; // Maximum zoom level for the heatmap layer

export const heatmapLayer: HeatmapLayer = {

id: "heatmap", // Unique identifier for the layer

maxzoom: MAX_ZOOM_LEVEL, // Restrict the layer to the maximum zoom level specified

type: "heatmap", // Specifies the type of layer as a heatmap

paint: {

// Increase the heatmap weight based on frequency and property magnitude

"heatmap-weight": [

"interpolate", // Function to interpolate between values

["linear"], // Interpolation type

["zoom"], // Get the 'mag' property from the data

10, .09, // If 'mag' is 0, weight is 0

MAX_ZOOM_LEVEL, 1 // If 'mag' is 6, weight is 1

],

// Increase the heatmap color weight by zoom level

// heatmap-intensity is a multiplier on top of heatmap-weight

"heatmap-intensity": [

"interpolate", // Function to interpolate between values

["linear"], // Interpolation type

["zoom"], // Use the zoom level for interpolation

0, 0.3, // At zoom level 0, intensity is 1

MAX_ZOOM_LEVEL, .1 // At MAX_ZOOM_LEVEL, intensity is 1 (no change with zoom)

],

// Color ramp for heatmap. Domain is 0 (low density) to 1 (high density).

// Begin color ramp at 0-stop with a 0-transparency color to create a blur-like effect.

"heatmap-color": [

"interpolate", // Function to interpolate between values

["linear"], // Interpolation type

["heatmap-density"], // Use th e heatmap density for interpolation

0, "rgba(33,102,172,0)", // At density 0, color is transparent


0.2, "rgb(111, 176, 199)", // At density 0.2, color is light blue
0.4, "rgb(209, 221, 240)", // At density 0.4, color is lighter blue
0.6, "rgb(253,219,199)", // At density 0.6, color is light pink
0.8, "rgb(239,138,98)", // At density 0.8, color is orange

1, "rgb(255,201,101)" // At density 1, color is yellow

],

// Adjust the heatmap radius by zoom level

"heatmap-radius": [

"interpolate", // Function to interpolate between values

["linear"], // Interpolation type

["zoom"], // Use the zoom level for interpolation

0, 15, // At zoom level 0, radius is 2

MAX_ZOOM_LEVEL, 5 // At MAX_ZOOM_LEVEL, radius is 10

],

// Transition from heatmap to circle layer by zoom level

"heatmap-opacity": [

"interpolate", // Function to interpolate between values

["linear"], // Interpolation type

["zoom"], // Use the zoom level for interpolation

10, 0.8, // At zoom level 10, opacity is 1 (fully opaque)

MAX_ZOOM_LEVEL, 1 // At MAX_ZOOM_LEVEL, opacity is 0 (fully transparent)

],

},

};