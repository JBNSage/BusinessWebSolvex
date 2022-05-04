import React, { useState } from "react";
import { apiCalls } from "../utilities/apiCalls";
import { userStorage } from "../utilities/constants";

export default function useAuthentication() {
  const retrieveUser = () => {
    const storedUser = JSON.parse(sessionStorage.getItem(userStorage));
    if (storedUser) {
      return storedUser;
    }
  };

  const [user, setUser] = useState(retrieveUser());

  const login = async (body) => {
    const response = await apiCalls.login(body);

    if (response.data) {
      storeUser(response.data);
    }

    return response;
  };

  const updateUser = async (body) => {
    body.password = user.password;
    body.createdAt = user.createdAt;
    body.updatedAt = user.updatedAt;

    const response = await apiCalls.updateUser(user.id, body);
    console.log(
      "🚀 ~ file: useAuthentication.js ~ line 29 ~ updateUser ~ response",
      response
    );

    if (response.data) {
      storeUser(response.data);
    }
  };

  const logout = () => {
    setUser(undefined);
    sessionStorage.removeItem(userStorage);
  };

  const register = async (body) => {
    const response = await apiCalls.register(body);

    if (response.data) {
      storeUser(response.data);
    }
    return response;
  };

  const resetPassword = () => {};

  const storeUser = (responseData) => {
    setUser(responseData);
    sessionStorage.setItem(userStorage, JSON.stringify(responseData));
  };

  return {
    login,
    register,
    logout,
    resetPassword,
    user,
    storeUser,
    updateUser,
  };
}
