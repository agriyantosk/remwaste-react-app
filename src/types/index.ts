export type DangerTagKey = "allows_heavy_waste";
export type WarningTagKey = "allowed_on_road";

export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

export type MeasurementUnit = "metric" | "imperial";
