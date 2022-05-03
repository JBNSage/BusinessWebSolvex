import axios from "axios";
import { apiRoutes, serverDomain } from "./constants";

export const apiCalls = {
  register: (body) => postData(apiRoutes.register, body),
  login: (body) => postData(apiRoutes.login, body),
  getProducts: () => getData(apiRoutes.products),
  getProductById: (id) => getData(apiRoutes.products, id),
  getCategories: () => getData(apiRoutes.categories),
  getOrders: () => getData(apiRoutes.orders),
  getCountries: () => getData(apiRoutes.countries),
  getCreditCards: () => getData(apiRoutes.credit_cards),
  // changePassword: (id, body) => updateData(apiRoutes.users, id, body),
};

const getData = async (route, id) => {
  var response = { data: undefined, error: undefined };

  try {
    if (id) {
      var requestResponse = route.find((element) => (element.id = id));
    } else {
      var requestResponse = route;
    }

    response.data = requestResponse;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};

const postData = async (route, body) => {
  var response = { data: undefined, error: undefined };

  try {
    const requestResponse = route;

    response.data = requestResponse;
  } catch (error) {
    console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
    response.error = error;
  }
  return response;
};

// const getData = async (route) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     const requestResponse = await axios.get(serverDomain + route);

//     response.data = requestResponse.data;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };

// const postData = async (route, body) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     const requestResponse = await axios.get(serverDomain + route, body);
//     response.data = requestResponse.data;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };

// const updateData = async (route, id, body) => {
//   var response = { data: undefined, error: undefined };

//   try {
//     const requestResponse = await axios.put(
//       serverDomain + route + "/" + id,
//       body
//     );
//     response.data = requestResponse.data;
//   } catch (error) {
//     console.log("🚀 ~ file: apiCalls.js ~ line 14 ~ getData ~ error", error);
//     response.error = error;
//   }
//   return response;
// };
