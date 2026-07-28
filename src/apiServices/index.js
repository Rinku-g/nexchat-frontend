import axios from "axios";

const api = axios.create({
  baseURL: "https://nexchat-backend-production-d51b.up.railway.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async (config) => {
  try {
    const { data, status } = await api(config);
    console.log("qqqqqqqqqqqq", data);
    return data;
  } catch (error) {
    const status = error.response?.status || 500;
    let message = "";

    switch (status) {
      case 400:
        message = error.response?.data?.message || "Bad Request";

        break;

      case 401:
        message = error.response?.data?.message || "Unauthorized";
        break;

      case 403:
        message = error.response?.data?.message || "Access Denied";
        break;

      case 404:
        message = error.response?.data?.message || "API Not Found";
        break;

      case 409:
        message = error.response?.data?.message || "Data Already Exists";
        break;

      case 422:
        message = error.response?.data?.message || "Validation Failed";
        break;

      case 500:
        message = error.response?.data?.message || "Internal Server Error";
        break;

      default:
        if (error.code === "ECONNABORTED") {
          message = "Request Timeout";
        } else if (!error.response) {
          message = "Network Error. Please check your internet connection.";
        } else {
          message = error.response?.data?.message || "Something went wrong";
        }
    }

    return error.response?.data || null;
  }
};
