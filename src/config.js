import axios from "axios";
import handleResponseError from "./utils/handleResponseError";

const requestHeaders = { "Content-Type": "application/json" };
const authToken = localStorage.getItem("chosen_token");

if (authToken && authToken !== "null") {
  requestHeaders.Authorization = `Bearer ${authToken}`;
}

const Axios = axios.create({
  //you can change this when running locally with your local backend server
  baseURL: "https://wah20.prodevs.io/api",
  headers: requestHeaders,
});

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if(parseInt(error?.response?.status) === 406) window.location.href="/dashboard/plans";
    handleResponseError(error.response);
    return Promise.reject(error);
  }
);

export default Axios;
