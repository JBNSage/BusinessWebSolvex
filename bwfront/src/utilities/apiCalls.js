import axios from "axios";
import { apiRoutes, serverDomain } from "./constants";

export const apiCalls = {
  register: (body) => postData(apiRoutes.users, body),
  login: (body) => postData(apiRoutes.login, body),
  updateUser: (userId, body) => updateData(apiRoutes.users, userId, body),
  getProductsByCategory: (category) =>
    getData(apiRoutes.products + `?$filter=categoryId eq ${category}`),
  getProducts: () => getData(apiRoutes.products),
  getProductById: (id) => getData(apiRoutes.products + "/" + id),
  updateProducts: (products) =>
    updateData(apiRoutes.updateManyProducts, undefined, products),
  getCategories: () => getData(apiRoutes.categories),
  createOrder: (body) => postData(apiRoutes.orders, body),
  getOrders: () => getData(apiRoutes.orders),
  getCountries: () => getData(apiRoutes.countries),
  addCreditCard: (body) => postData(apiRoutes.credit_cards, body),
  getCreditCards: (userId) =>
    getData(apiRoutes.credit_cards + `?$filter=userId eq ${userId}`),
  deleteCreditCard: (cardId) => deleteData(apiRoutes.credit_cards, cardId),
  editCreditCard: (cardId, body) =>
    updateData(apiRoutes.credit_cards, cardId, body),
  getAddresses: (userId) =>
    getData(apiRoutes.address + `?$filter=userId eq ${userId}`),
  addAddress: (body) => postData(apiRoutes.address, body),
  deleteAddress: (addressId) => deleteData(apiRoutes.address, addressId),
  updateAddress: (addressId, body) =>
    updateData(apiRoutes.address, addressId, body),

  // changePassword: (id, body) => updateData(apiRoutes.users, id, body),
};

// const getData = async (route, id) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     if (id) {
//       var requestResponse = route.find((element) => element.id == id);
//     } else {
//       var requestResponse = route;
//     }

//     response.data = requestResponse;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };

// const postData = async (route, body) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     const requestResponse = route;

//     response.data = requestResponse;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };

// const updateData = async (route, id, body) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     var requestResponseIndex = route.findIndex((element) => element.id == id);

//     var requestResponse = route;

//     requestResponse.splice(requestResponseIndex, 1);

//     response.data = requestResponse;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };

// const deleteData = async (route, id) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     var requestResponseIndex = route.findIndex((element) => element.id == id);

//     var requestResponse = route;

//     requestResponse.splice(requestResponseIndex, 1);

//     response.data = requestResponse;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };

const getData = async (route) => {
  var response = { data: undefined, error: undefined };

  try {
    const requestResponse = await axios.get(serverDomain + route);

    response.data = requestResponse.data;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};

const postData = async (route, body) => {
  var response = { data: undefined, error: undefined };

  try {
    const requestResponse = await axios.post(serverDomain + route, body);
    response.data = requestResponse.data;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};

const updateData = async (route, id = undefined, body) => {
  var response = { data: undefined, error: undefined };

  if (id) {
    route = route + "/" + id;
  }
  try {
    const requestResponse = await axios.put(serverDomain + route, body);
    response.data = requestResponse.data;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};

const deleteData = async (route, id) => {
  var response = { data: undefined, error: undefined };

  try {
    var requestResponse = axios.delete(serverDomain + route + "/" + id);

    response.data = requestResponse;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};
