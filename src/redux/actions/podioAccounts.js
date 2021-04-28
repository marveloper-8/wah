import axios from "axios";
import * as actionTypes from "../constants/actionsTypes";
import { Routes } from "../../constants/Routes";

export const getAllPodioAccountsStart = () => {
  return {
    type: actionTypes.GET_ALL_PODIO_ACCOUNTS_START,
  };
};

export const getAllPodioAccountsSuccess = (data) => {
  return {
    type: actionTypes.GET_ALL_PODIO_ACCOUNTS_SUCCESS,
    payload: data,
  };
};

export const getAllPodioAccountsFail = (error) => {
  return {
    type: actionTypes.GET_ALL_PODIO_ACCOUNTS_FAIL,
    error: error,
  };
};

export const getAllPodioAccounts = (token) => {
  return (dispatch) => {
    dispatch(getAllPodioAccountsStart());
    axios({
      method: "get",
      url: Routes.podioAccounts + token,
    })
      .then((res) => {
        dispatch(getAllPodioAccountsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllPodioAccountsFail(err.response.data));
      });
  };
};

export const getAllSyncedAccountsStart = () => {
  return {
    type: actionTypes.GET_ALL_SYNCED_ORG_START,
  };
};

export const getAllSyncedAccountsSuccess = (data) => {
  return {
    type: actionTypes.GET_ALL_SYNCED_ORG_SUCCESS,
    payload: data,
  };
};

export const getAllSyncedAccountsFail = (error) => {
  return {
    type: actionTypes.GET_ALL_SYNCED_ORG_FAIL,
    error: error,
  };
};

export const getAllSyncedAccounts = (token) => {
  return (dispatch) => {
    dispatch(getAllSyncedAccountsStart());
    axios({
      method: "get",
      url: Routes.synced + token,
    })
      .then((res) => {
        dispatch(getAllSyncedAccountsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllSyncedAccountsFail(err.response.data));
      });
  };
};

export const getAllUnSyncedAccountsStart = () => {
  return {
    type: actionTypes.GET_ALL_UNSYNCED_ORG_START,
  };
};

export const getAllUnSyncedAccountsSuccess = (data) => {
  return {
    type: actionTypes.GET_ALL_UNSYNCED_ORG_SUCCESS,
    payload: data,
  };
};

export const getAllUnSyncedAccountsFail = (error) => {
  return {
    type: actionTypes.GET_ALL_UNSYNCED_ORG_FAIL,
    error: error,
  };
};

export const getAllUnSyncedAccounts = (token) => {
  return (dispatch) => {
    dispatch(getAllUnSyncedAccountsStart());
    axios({
      method: "get",
      url: Routes.unsynced + token,
    })
      .then((res) => {
        dispatch(getAllUnSyncedAccountsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllUnSyncedAccountsFail(err.response.data));
      });
  };
};

export const syncOrganizationStart = () => {
  return {
    type: actionTypes.SYNC_ORGANISATION_START,
  };
};

export const syncOrganizationSuccess = (data) => {
  return {
    type: actionTypes.SYNC_ORGANISATION_SUCCCESS,
    payload: data,
  };
};

export const syncOrganizationFail = (error) => {
  return {
    type: actionTypes.SYNC_ORGANISATION_FAIL,
    error: error,
  };
};

export const syncOrganization = (token, name, id, db_name) => {
  return (dispatch) => {
    dispatch(syncOrganizationStart());
    axios({
      method: "post",
      url: `${Routes.syncAnOrganization}${token}&org_id=${id}&org_name=${name}`,
    })
      .then((res) => {
        dispatch(syncOrganizationSuccess(res.data));
      })
      .catch((err) => {
        dispatch(syncOrganizationFail(err.response));
      });
  };
};

export const getSyncingStatusFromFirebasestart = () => {
  return {
    type: actionTypes.GET_SYNCING_STATUS_FROM_FIREBASE_START,
  };
};

export const getSyncingStatusFromFirebaseSuccess = (data) => {
  return {
    type: actionTypes.GET_SYNCING_STATUS_FROM_FIREBASE_SUCCESS,
    payload: data,
  };
};

export const getSyncingStatusFromFirebaseFail = (error) => {
  return {
    type: actionTypes.GET_SYNCING_STATUS_FROM_FIREBASE_FAIL,
    error,
  };
};

export const getSyncingStatusFromFirebase = (orgId, db_name) => {
  return (dispatch) => {
    dispatch(getSyncingStatusFromFirebasestart());
    axios
      .get(
        `${
          Routes.getSyncingStatusFromFireBase
        }${db_name.toLowerCase()}/sync/podio/${orgId}.json`
      )
      .then((res) => {
        dispatch(getSyncingStatusFromFirebaseSuccess(res.data.status));
      })
      .catch((err) => {
        dispatch(getSyncingStatusFromFirebaseFail(err.response));
      });
  };
};
