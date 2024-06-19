import { scaleQuantile } from "d3-scale";
import { range } from "d3-array";

/**
 * Updates features with reversed ranks instead of percentiles.
 * @param {GeoJSON.FeatureCollection<GeoJSON.Geometry>} featureCollection - The GeoJSON feature collection.
 * @param {function(GeoJSON.Feature<GeoJSON.Geometry>): number} accessor - Function to access the value for ranking.
 * @returns {GeoJSON.FeatureCollection<GeoJSON.Geometry>} - The updated feature collection with reversed ranks.
 */
export function updateRanks(featureCollection, accessor) {
  const { features } = featureCollection;

  // Sort features based on the value accessed by the accessor function
  const sortedFeatures = features.slice().sort((a, b) => {
    return accessor(a) - accessor(b);
  });

  // Assign reversed ranks to the sorted features
  const reversedRankedFeatures = sortedFeatures.map((f, index) => {
    const value = accessor(f);
    const properties = {
      ...f.properties,
      value,
      rank: features.length - index, // Reverse the index to get reversed ranks
    };
    return { ...f, properties };
  });

  return {
    type: "FeatureCollection",
    features: reversedRankedFeatures,
  };
}
