import {
  DESTROY_SPACE_HOOKS,
  DIS_SPACE_HOOKS,
  REMOVE_SPACE_HOOKS,
  SET_SPACE_HOOKS,
  UPDATE_SPACE_HOOKS,
} from "../constants/orgs";

export const setSpaceHooks = (data) => ({
  type: SET_SPACE_HOOKS,
  payload: data,
});

export const setDisSpaceHooks = (data) => ({
  type: DIS_SPACE_HOOKS,
  payload: data,
});

export const destroySpaceHooks = (data) => ({
  type: DESTROY_SPACE_HOOKS,
  payload: data,
});

export const updateSpaceHooks = (data) => ({
  type: UPDATE_SPACE_HOOKS,
  payload: data,
});

export const removeSpaceHooks = (data) => ({
  type: REMOVE_SPACE_HOOKS,
  payload: data,
});
