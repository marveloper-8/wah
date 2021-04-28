import * as actionTypes from "../constants/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
  data: null,
  error: null,
  firebaseStatus: null,
  firebaseError: null,
  loadingFromFirebase: null,
  loading: false,
};

const syncingStart = (state, action) => {
  return updatedObject(state, { error: null, loading: true });
};

const syncingSuccess = (state, action) => {
  return updatedObject(state, {
    data: action.payload,
    error: null,
    loading: false,
  });
};

const syncingFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  });
};

const getStatusFromFirebaseStart = (state, action) => {
  return updatedObject(state, {
    firebaseError: null,
    loadingFromFirebase: true,
  });
};

const getStatusFromFirebaseSuccess = (state, action) => {
  return updatedObject(state, {
    firebaseStatus: action.payload,
    firebaseError: null,
    loadingFromFirebase: false,
  });
};

const getStatusFromFirebaseFail = (state, action) => {
  return updatedObject(state, {
    firebaseStatus: null,
    firebaseError: null,
    loadingFromFirebase: false,
  });
};

const syncing = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SYNC_ORGANISATION_START:
      return syncingStart(state, action);
    case actionTypes.SYNC_ORGANISATION_SUCCCESS:
      return syncingSuccess(state, action);
    case actionTypes.SYNC_ORGANISATION_FAIL:
      return syncingFail(state, action);
    case actionTypes.GET_SYNCING_STATUS_FROM_FIREBASE_START:
      return getStatusFromFirebaseStart(state, action);
    case actionTypes.GET_SYNCING_STATUS_FROM_FIREBASE_SUCCESS:
      return getStatusFromFirebaseSuccess(state, action);
    case actionTypes.GET_SYNCING_STATUS_FROM_FIREBASE_FAIL:
      return getStatusFromFirebaseFail(state, action);
    default:
      return state;
  }
};

export default syncing;
