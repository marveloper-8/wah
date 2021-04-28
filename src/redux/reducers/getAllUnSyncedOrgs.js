import * as actionTypes from "../constants/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const getALLUnsyncedOrgsStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const getALLUnsyncedOrgsSuccess = (state, action) => {
  return updatedObject(state, {
    data: action.payload,
    error: null,
    loading: false,
  });
};

const getALLUnsyncedOrgsFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const getALLUnsyncedOrgs = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_UNSYNCED_ORG_START:
      return getALLUnsyncedOrgsStart(state, action);
    case actionTypes.GET_ALL_UNSYNCED_ORG_SUCCESS:
      return getALLUnsyncedOrgsSuccess(state, action);
    case actionTypes.GET_ALL_UNSYNCED_ORG_FAIL:
      return getALLUnsyncedOrgsFail(state, action);
    default:
      return state;
  }
};

export default getALLUnsyncedOrgs;
