import axios from "../config";
import asyncHandler from "../utils/asyncHandler";

export const registerUser = asyncHandler(
  async (data) => await axios.post(`/register`, data)
);

export const loginUser = asyncHandler(
  async (data) => await axios.post(`/login`, data)
);

export const updateProfile = asyncHandler(
  async (data) => await axios.post(`/user/profile-update`, data)
);

export const podioAuthUser = asyncHandler(
  async (data) => await axios.post(`/auth/authorize_podio`, data)
);

export const requestPasswordReset = asyncHandler(
  async (data) => await axios.post(`/auth/password/forgot`, data)
);

export const verifyEmail = asyncHandler(
  async (query) => await axios.post(`/auth/verify_token${query}`)
);

export const getMe = asyncHandler(async () => await axios.get(`/auth/me`));

export const authorization_check = asyncHandler(
  async (query) => await axios.post(`/auth/authorization_check${query}`)
);

export const imitate_account = asyncHandler(
  async (query) => await axios.post(`/auth/imitate_account${query}`)
);

export const authConnector = asyncHandler(
  async (data) => await axios.post(`/connector/authorize/callback${data}`)
);
