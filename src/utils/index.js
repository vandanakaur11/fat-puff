import Axios from "axios";

// const publicIP = "https://broadcast-backend.herokuapp.com";

export const publicIP = `https://www.fatpuffwholesale.com/wp-json/wc/v3`;
export const base_url = `${publicIP}`;

export const connection_string = `${base_url}`;

export const publicAPI = Axios.create({
  baseURL: connection_string,
});

// export const privateAPI = Axios.create({ baseURL: connection_string });

export const page = 1;
export const perPage = 9;

// export const attachToken = async () => {
//   const jwt = localStorage.getItem("token");
//   privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
//   console.log("Token Attached");
// };
export const attachHeaders = async (route) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/${route}?per_page=100&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const setRegister = async (route) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/${route}?consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const getProductById = async (id) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/products/${id}?per_page=100&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const getProductVariations = async (id) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/products/${id}/variations?per_page=100&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const getSearchProducts = async (value) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/products?search=${value}&per_page=100&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const getProductCategories = async (value) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/products/categories?per_page=100&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const getUserUrl = async (id) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v3/customers/${id}/?&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
export const getUserOrderUrl = async (id) => {
  return `https://www.fatpuffwholesale.com/wp-json/wc/v2/orders?customer=${id}&consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.secret_key}`;
};
