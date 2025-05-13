import {
  skipDescriptions,
  skipDimensions,
  skipImages,
  skipRecommendations,
} from "../data";
import type { EnrichedSkip, Skip } from "../types";

export const enrichSkip = (skip: Skip): EnrichedSkip => {
  return {
    ...skip,
    description: skipDescriptions[skip.size] ?? "",
    recommendations: skipRecommendations[skip.size] ?? [],
    dimensions: skipDimensions[skip.size],
    imgs: skipImages,
  };
};

export const getDeviceOS = (): "android" | "ios" | "unknown" => {
  const ua = navigator.userAgent.toLowerCase();
  if (/android/.test(ua)) return "android";
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  return "unknown";
};

export const isMobile = (): boolean =>
  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent.toLowerCase()
  );
