import * as actionTypes from "../constants/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
  accounts: null,
  message: null,
  error: null,
  loading: false,
};

const getPodioAccountsStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const getPodioAccountsSuccess = (state, action) => {
  return updatedObject(state, {
    accounts: action.payload,
    error: null,
    loading: false,
  });
};

const getPodioAccountsFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const getPodioAccounts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PODIO_ACCOUNTS_START:
      return getPodioAccountsStart(state, action);
    case actionTypes.GET_ALL_PODIO_ACCOUNTS_SUCCESS:
      return getPodioAccountsSuccess(state, action);
    case actionTypes.GET_ALL_PODIO_ACCOUNTS_FAIL:
      return getPodioAccountsFail(state, action);
    default:
      return state;
  }
};

export default getPodioAccounts;
