import type { FillLayer } from "react-map-gl";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#052635"],
        [1, "#032839"],
        [2, "#052E41"],
        [3, "#05374e"],
        [4, "#084b6b"],
        [5, "#0b5577"],
        [6, "#136c95"],
        [7, "#187caa"],
        [8, "#2597cb"],
      ],
    },
    "fill-opacity": 0.8,
  },
};
