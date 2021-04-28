import { ORGS, WIDGETS, HOOKSLOG, HOOKS_PAGE } from "../constants/hooks";

export const orgsSuccess = (payload) => ({
  type: ORGS.success,
  payload,
});

export const widgetsSuccess = (payload) => ({
  type: WIDGETS.success,
  payload,
});

export const hooksLogSuccess = (payload) => ({
  type: HOOKSLOG.success,
  payload,
});

export const hooksPage = (payload) => ({
  type: HOOKS_PAGE.success,
  payload,
});
