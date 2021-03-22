import { LOGIN_USER, LOGOUT_USER } from "../types";

export const loginUser = (userDetails) => {
  let a = {
    isLoggedIn: true,
    user: userDetails,
  };

  if (!JSON.parse(localStorage.getItem("loggedIn")).isLoggedIn)
    saveLoginDetailsToLocalStorage(a);

  return {
    type: LOGIN_USER,
    payload: a,
  };
};

export const saveLoginDetailsToLocalStorage = (userDetails) => {
  localStorage.setItem("loggedIn", JSON.stringify(userDetails));
};

export const logoutUser = () => {
  localStorage.setItem(
    "loggedIn",
    JSON.stringify({
      isLoggedIn: false,
      user: null,
    })
  );

  return {
    type: LOGOUT_USER,
  };
};
