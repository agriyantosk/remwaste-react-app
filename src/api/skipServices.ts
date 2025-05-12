import axios from "axios";
import type { Skip } from "../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchSkips = async (): Promise<Skip[]> => {
  const response = await axios.get(`${BASE_URL}/skips`);
  return response.data;
};
