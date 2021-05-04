import { createActionType } from "../../helpers/reduxHelpers";

export const SET_USER = "SET_USER";

export const SEND_INVITE = createActionType("SEND_INVITE");
export const DELETE_INVITE = createActionType("DELETE_INVITE");
export const UPDATE_PROFILE = createActionType("UPDATE_PROFILE");
export const ADD_ADDRESS = createActionType("ADD_ADDRESS");
export const EDIT_ADDRESS = createActionType("EDIT_ADDRESS");
export const GET_ADDRESS = createActionType("GET_ADDRESS");
export const DELETE_ADDRESS = createActionType("DELETE_ADDRESS");
export const ADD_CART = createActionType("ADD_CART");
export const UPDATE_CART = createActionType("UPDATE_CART");
export const GET_CART = createActionType("GET_CART");
export const ADD_FAVOURITE = createActionType("ADD_FAVOURITE");
export const GET_FAVOURITE = createActionType("GET_FAVOURITE");
export const GET_BANK = createActionType("GET_BANK");
export const GET_TEAM_MEMBERS = createActionType("GET_TEAM_MEMBERS");
export const GET_ME = createActionType("GET_ME");
export const DELETE_PODIO = createActionType("DELETE_PODIO");
export const GET_PENDING_INVITATION = createActionType(
  "GET_PENDING_INVITATION"
);


