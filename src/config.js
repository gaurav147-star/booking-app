import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://aronbookings.onrender.com/api/",
  // headers: {
  //   "Content-Type": "application/json",
  // },
  // baseURL: "http://localhost:8080/api/"
});

export default axiosInstance;
