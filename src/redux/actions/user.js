import * as user from "../constants/user";

export const setUser = (data) => ({
  type: user.SET_USER,
  payload: data,
});
export const getMe = () => ({
  type: user.GET_ME.request,
});

export const sendInvite = (payload) => ({
  type: user.SEND_INVITE.request,
  payload,
});
export const deleteInvite = (payload) => ({
  type: user.DELETE_INVITE.request,
  payload,
});
export const updateProfile = (payload) => ({
  type: user.UPDATE_PROFILE.request,
  payload,
});
export const addAddress = (payload) => ({
  type: user.ADD_ADDRESS.request,
  payload,
});
export const editAddress = (payload) => ({
  type: user.EDIT_ADDRESS.request,
  payload,
});
export const getAddress = () => ({
  type: user.GET_ADDRESS.request,
});
export const deleteAddress = (payload) => ({
  type: user.DELETE_ADDRESS.request,
  payload,
});
export const addCart = (payload) => ({
  type: user.ADD_CART.request,
  payload,
});
export const updateCart = (payload) => ({
  type: user.UPDATE_CART.request,
  payload,
});
export const getCart = () => ({
  type: user.GET_CART.request,
});
export const addFavourite = (payload) => ({
  type: user.ADD_FAVOURITE.request,
  payload,
});
export const getFavourite = () => ({
  type: user.GET_FAVOURITE.request,
});
export const getBank = () => ({
  type: user.GET_BANK.request,
});
export const getTeamMembers = () => ({
  type: user.GET_TEAM_MEMBERS.request,
});
export const getPendingInvitation = () => ({
  type: user.GET_PENDING_INVITATION.request,
});
export const deletePodio = () => ({
  type: user.DELETE_PODIO.request,
});


