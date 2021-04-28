import axios from "../config";
import asyncHandler from "../utils/asyncHandler";

export const getNavigation = asyncHandler(async () => await axios.get(`/menu`));
