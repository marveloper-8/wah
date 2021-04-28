import axios from "axios";

export * from "./request";

export const baseURL = "https://wah20.prodevs.io/api";
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
  },
});

//  This adds a token before all the requests.
// https://stackoverflow.com/questions/57251719/acquiring-a-new-token-with-axios-interceptors
const addTokenToRequest = (request) => {
  request.headers.Authorization = `Bearer ${localStorage.getItem(
    "chosen_token"
  )}`;
  return request;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
