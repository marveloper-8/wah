import {
  DESTROY_APP_HOOKS,
  DIS_APP_HOOKS,
  REMOVE_APP_HOOKS,
  SET_APP_HOOKS,
  UPDATE_APP_HOOKS,
} from "../constants/orgs";

export const setAppHooks = (data) => ({
  type: SET_APP_HOOKS,
  payload: data,
});

export const setDisHooks = (data) => ({
  type: DIS_APP_HOOKS,
  payload: data,
});

export const destroyAppHooks = (data) => ({
  type: DESTROY_APP_HOOKS,
  payload: data,
});

export const updateAppHooks = (data) => ({
  type: UPDATE_APP_HOOKS,
  payload: data,
});

export const removeAppHooks = (data) => ({
  type: REMOVE_APP_HOOKS,
  payload: data,
});
