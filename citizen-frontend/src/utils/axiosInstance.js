import axios from "axios";
import { API_BASE_URL } from "./apiPaths.js";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    // add any custom headers or logic here
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle specific status codes
      if (error.response.status === 401) {
        // Unauthorized - token might be invalid or expired
        window.location.href = "/citizenlogin"; // Redirect to login page
      } else if (error.response.status === 500) {
        alert("An unexpected error occurred. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      // Network error or server is down
      alert(
        "Unable to connect to the server. Please check your internet connection and try again.",
      );
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
