import axios from "axios";
// import Cookies from "js-cookie";

// const accessToken = Cookies.get("accessToken");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DEPLOYED_URL,
  withCredentials: true,
  // headers: {
  //   "x-access-token": accessToken,
  // },
});

export default axiosInstance;
