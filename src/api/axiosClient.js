import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "content-type": "application/json",
  },

  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;

// import axios from "axios";
// import queryString from "query-string";
// import test from "./test";
// // Set up default config for http requests here

// // Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

// const axiosClient = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     "content-type": "application/json",
//     // 'content-type': 'multipart/form-data',
//   },
//   paramsSerializer: (params) => queryString.stringify(params),
// });

// axiosClient.interceptors.request.use(async (config) => {
//   const accessToken = localStorage.getItem("ACCESS_TOKEN");
//   if (accessToken) {
//     config.headers["access_token"] = accessToken;
//   }
//   if (config.url === "/auth/refreshToken.js") {
//     config.headers["refresh_token"] = localStorage.getItem("REFRESH_TOKEN");
//   }

//   return config;
// });
// let refreshTokenRequest = null;
// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   async (error) => {
//     // Handle errors
//     if (
//       error.response.status === 401 &&
//       error.config.url !== "/auth/refreshToken.js"
//     ) {
//       refreshTokenRequest = refreshTokenRequest
//         ? refreshTokenRequest
//         : test.refreshToKen();
//       const res = await refreshTokenRequest;
//       localStorage.setItem("ACCESS_TOKEN", res);
//       refreshTokenRequest = null;
//       return axiosClient(error.config);
//     }
//     if (
//       (error.response.status === 401 &&
//         error.config.url === "/auth/refreshToken.js") ||
//       error.response.status === 403
//     ) {
//       localStorage.removeItem("ACCESS_TOKEN");
//       localStorage.removeItem("REFRESH_TOKEN");
//       window.location.href = "/error403";
//     }
//     throw error;
//   }
// );
// export default axiosClient;
