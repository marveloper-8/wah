import {
  INITIAL_STATE,
  ADD_SECTION,
  ADD_FIELD,
  MOVE_SECTION,
  MOVE_FIELD,
  REMOVE_SECTION,
  REMOVE_FIELD,
  UPDATE_FIELD_DETAIL,
  UPDATE_SECTION_DETAIL,
} from "../constants/appBuilder";

export const initialAppBuilderState = (data) => ({
  type: INITIAL_STATE,
  payload: data,
});

export const addSection = (data) => ({
  type: ADD_SECTION,
  payload: data,
});

export const addField = (data) => ({
  type: ADD_FIELD,
  payload: data,
});

export const moveSection = (data) => ({
  type: MOVE_SECTION,
  payload: data,
});

export const moveField = (data) => ({
  type: MOVE_FIELD,
  payload: data,
});

export const removeSection = (data) => ({
  type: REMOVE_SECTION,
  payload: data,
});

export const removeField = (data) => ({
  type: REMOVE_FIELD,
  payload: data,
});

export const updateFieldDetail = (data) => ({
  type: UPDATE_FIELD_DETAIL,
  payload: data,
});

export const updateSectionDetail = (data) => ({
  type: UPDATE_SECTION_DETAIL,
  payload: data,
});
