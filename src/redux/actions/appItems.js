import {
    INITIAL_APP_ITEM_STATE,
    ADD_ITEM,
    ADD_VALUE,
  } from "../constants/appItems";
  
  export const initialState = (data) => ({
    type: INITIAL_APP_ITEM_STATE,
    payload: data,
  });

  export const addItem = (data) => ({
    type: ADD_ITEM,
    payload: data,
  });
  
  export const addValue = (data) => ({
    type: ADD_VALUE,
    payload: data,
  });
  
  