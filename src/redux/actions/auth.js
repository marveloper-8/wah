import * as actionTypes from "../constants/actionsTypes";
import { setUser } from "./user";

export const logout = () => {
  localStorage.removeItem("chosen_token");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const auth = (data) => {
  return (dispatch) => {
    dispatch(setUser(data));
    // dispatch(setAuditOrg(orgs));
  };
};

const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setUser(null));
      //dispatch(setAuditOrg(null));
      dispatch(logout());
    }, expirationTime);
  };
};

export const authCheckState = (expirationDate, user, orgs) => {
  return (dispatch) => {
    const token = localStorage.getItem("chosen_token");

    if (!token) {
      dispatch(logout());
    } else {
      if (new Date(expirationDate) <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(auth(user, orgs));
        dispatch(
          checkAuthTimeOut(
            new Date(expirationDate).getTime() - new Date().getTime()
          )
        );
      }
    }
  };
};

export const authRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path,
  };
};
