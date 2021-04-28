import {
  GET_COLUMNS,
  GET_DATA,
  GET_PLANS,
  GET_INVOICES,
  SELECT_ITEM,
  UN_SELECT_ITEM,
  DELETE_SELECTED,
  RESTORE_SELECTED,
  GET_ORGANISATIONS,
} from "../constants/test";

export const getColumnsRequest = () => ({
  type: GET_COLUMNS.request,
});

export const getDataSource = () => ({
  type: GET_DATA.request,
});
export const getPlansRequest = () => ({
  type: GET_PLANS.request,
});
export const getInvoicesRequest = () => ({
  type: GET_INVOICES.request,
});
export const selectItem = (payload) => ({
  type: SELECT_ITEM,
  payload,
});
export const deleteItem = (payload) => ({
  type: UN_SELECT_ITEM,
  payload,
});
export const removeFromSync = (payload) => ({
  type: DELETE_SELECTED.request,
  payload,
});
export const restoreToPodio = (payload) => ({
  type: RESTORE_SELECTED.request,
  payload,
});
export const getOrgs = () => ({
  type: GET_ORGANISATIONS.request,
});
