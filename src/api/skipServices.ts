import axios from "axios";
import type { EnrichedSkip, Skip } from "../types";
import { enrichSkip } from "../utils";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchSkips = async (): Promise<EnrichedSkip[]> => {
  const response = await axios.get<Skip[]>(`${BASE_URL}/skips`);
  return response.data.map(enrichSkip);
};
