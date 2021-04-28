import { SET_ORGS } from "../constants/sync";

export const setOrgs = (data) => ({
  type: SET_ORGS,
  payload: data,
});
