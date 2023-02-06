import axiosClient from "./axiosClient";

const productApi = {
  getAll: async (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getSearch: async (params) => {
    const url = `/products?q=${params.name}`;
    return axiosClient.get(url, { params });
  },

  getById: async (id) => {
    const url = `/products?id=${id}`;
    return axiosClient.get(url);
  },
  getCategory: async (category, params) => {
    const url = `/products?category=${category}`;
    return axiosClient.get(url, { params });
  },
};

export default productApi;
