import type { FillLayer } from "react-map-gl";

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "rank",
      stops: [
        [0, "rgba(89, 158, 189, .9)"],
        [0.9, "rgba(117, 205, 255, .5)"],
        [2, "rgba(117, 205, 255, .6)"],
        [3, "rgba(105, 181, 222, .8)"],
        [4, "rgba(93, 164, 205, .8)"],
        [5, "rgba(89, 158, 189, .8)"],
        [6, "rgba(84, 152, 183, .8)"],
        [7, "rgba(80, 146, 176, .8)"],
        [8, "rgba(76, 139, 170, .8)"],
        [9, "rgba(71, 133, 163, .7)"],
        [10, "rgba(67, 127, 157, .8)"],
        [11, "rgba(63, 121, 151, .9)"],
        [12, "rgba(59, 115, 144, .9)"],
        [13, "rgba(54, 110, 138, .8)"],
        [14, "rgba(50, 104, 132, 0.8)"],
        [15, "rgba(46, 98, 125, .7)"],
        [16, "rgba(42, 92, 119, .8)"],
        [17, "rgba(38, 87, 113, .7)"],
        [18, "rgba(34, 81, 107, .7)"],
        [19, "rgba(30, 76, 101, .7)"],
        [20, "rgba(25, 70, 95, .7)"],
        [21, "rgba(21, 65, 89, 0.7)"],
        [22, "rgba(17, 59, 83, 0.6)"],
        [23, "rgba(13, 54, 77, 0.6)"],
        [24, "rgba(9, 49, 72, 0.5)"],
      ],
    },
    "fill-opacity": 0.8,
  },
};
