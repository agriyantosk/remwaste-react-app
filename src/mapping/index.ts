import type { DangerTagKey, WarningTagKey } from "../types";

export const dangerTagMap: Record<DangerTagKey, string> = {
  allows_heavy_waste: "Not Suitable for Heavy Waste",
};

export const warningTagMap: Record<WarningTagKey, string> = {
  allowed_on_road: "Not Allowed on the Road",
};
