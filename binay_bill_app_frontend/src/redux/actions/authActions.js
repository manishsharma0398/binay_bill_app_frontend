import { LOGIN_USER, LOGOUT_USER } from "../types";

export const loginUser = (userDetails) => {
  return {
    type: LOGIN_USER,
    payload: {
      isLoggedIn: true,
      user: userDetails,
    },
  };
};

export const logoutUser = (userDetails) => {
  return {
    type: LOGOUT_USER,
  };
};
