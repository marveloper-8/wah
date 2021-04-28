import { SET_AUDIT_ORGS } from "../constants/orgs";

export const setAuditOrg = (data) => ({
  type: SET_AUDIT_ORGS,
  payload: data,
});
