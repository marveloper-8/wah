import axios from "../config";
import asyncHandler from "../utils/asyncHandler";

export const partnerApply = asyncHandler(
  async (data) => await axios.post(`/others/unauth/partner/apply`, data)
);
