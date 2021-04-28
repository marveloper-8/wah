import * as actionTypes from "../constants/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const getALLsyncedOrgsStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const getALLsyncedOrgsSuccess = (state, action) => {
  return updatedObject(state, {
    data: action.payload,
    error: null,
    loading: false,
  });
};

const getALLsyncedOrgsFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const getALLsyncedOrgs = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SYNCED_ORG_START:
      return getALLsyncedOrgsStart(state, action);
    case actionTypes.GET_ALL_SYNCED_ORG_SUCCESS:
      return getALLsyncedOrgsSuccess(state, action);
    case actionTypes.GET_ALL_SYNCED_ORG_FAIL:
      return getALLsyncedOrgsFail(state, action);
    default:
      return state;
  }
};

export default getALLsyncedOrgs;
