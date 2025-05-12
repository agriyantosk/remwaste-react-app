import { skipDescriptions, skipDimensions, skipRecommendations } from "../data";
import type { EnrichedSkip, Skip } from "../types";

export const enrichSkip = (skip: Skip): EnrichedSkip => {
  return {
    ...skip,
    description: skipDescriptions[skip.size] ?? "",
    recommendations: skipRecommendations[skip.size] ?? [],
    dimensions: skipDimensions[skip.size],
  };
};
