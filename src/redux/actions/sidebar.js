import { SET_NAV } from "../constants/sidebar";

export const setNav = (data) => ({
  type: SET_NAV,
  payload: data,
});
