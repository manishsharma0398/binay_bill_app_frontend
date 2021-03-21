import { LOGIN_USER, LOGOUT_USER } from "../types";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return { ...state, isLoggedIn: payload.isLoggedIn, user: payload.user };
    case LOGOUT_USER:
      return { ...state, isLoggedIn: false, user: null };

    default:
      return state;
  }
};

export default authReducer;
