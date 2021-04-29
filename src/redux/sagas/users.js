import { takeLatest, call } from "redux-saga/effects";
import api, { userRequest } from "../../services";
import {
  SEND_INVITE,
  DELETE_INVITE,
  GET_TEAM_MEMBERS,
  GET_PENDING_INVITATION,
  GET_ME,
  DELETE_PODIO,
  UPDATE_PROFILE,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  GET_ADDRESS,
  DELETE_ADDRESS,
  ADD_CART,
  GET_CART,
  GET_FAVOURITE
} from "../constants/user";
import safeSaga from "../../helpers/safeSaga";
import { successHandler } from "../../helpers/apiRequests";

function* sendInvite({ payload }) {
  const response = yield call([api, "post"], userRequest.INVITE, payload);

  yield call(successHandler, response, SEND_INVITE.success, true);
}

function* deleteInvite({ payload }) {
  const response = yield call([api, "post"], userRequest.DELETE_INVITE, payload);

  yield call(successHandler, response, DELETE_INVITE.success, true);
}

function* updateProfile({ payload }) {
  const response = yield call([api, "post"], userRequest.UPDATE_PROFILE, payload);

  yield call(successHandler, response, UPDATE_PROFILE.success, true);
}

function* addAddress({ payload }) {
  const response = yield call([api, "post"], userRequest.ADD_ADDRESS, payload);

  yield call(successHandler, response, ADD_ADDRESS.success, true);
}

function* editAddress({ payload }) {
  const response = yield call([api, "post"], userRequest.EDIT_ADDRESS, payload);

  yield call(successHandler, response, EDIT_ADDRESS.success, true);
}

function* getAddress() {
  const response = yield call([api, "get"], userRequest.GET_ADDRESS);

  yield call(successHandler, response, GET_ADDRESS.success);
}

function* deleteAddress({ payload }) {
  const response = yield call([api, "post"], userRequest.DELETE_ADDRESS, payload);

  yield call(successHandler, response, DELETE_ADDRESS.success, true);
}

function* addCart({ payload }) {
  const response = yield call([api, "post"], userRequest.ADD_CART, payload);

  yield call(successHandler, response, ADD_CART.success, true);
}

function* getCart() {
  const response = yield call([api, "get"], userRequest.GET_CART);

  yield call(successHandler, response, GET_CART.success);
}

function* getFavourite() {
  const response = yield call([api, "get"], userRequest.GET_FAVOURITE);

  yield call(successHandler, response, GET_FAVOURITE.success);
}

function* getMembers() {
  const response = yield call([api, "get"], userRequest.TEAM_MEMBERS);

  yield call(successHandler, response, GET_TEAM_MEMBERS.success);
}

function* getPendingInvitation() {
  const response = yield call([api, "get"], userRequest.PENDING_INVITATION);

  yield call(successHandler, response, GET_PENDING_INVITATION.success);
}

function* getMe() {
  const response = yield call([api, "get"], userRequest.ME);

  yield call(successHandler, response, GET_ME.success);
}

function* deletePodio() {
  const response = yield call([api, "post"], userRequest.DELETE_PODIO);

  // yield call(getMe);
  yield call(
    successHandler,
    response,
    DELETE_PODIO.success,
    "Removed Account successfully"
  );
}

export default function* usersSaga() {
  yield takeLatest(
    SEND_INVITE.request,
    safeSaga(sendInvite, SEND_INVITE.error)
  );
  yield takeLatest(
    DELETE_INVITE.request,
    safeSaga(deleteInvite, DELETE_INVITE.error)
  );
  yield takeLatest(
    UPDATE_PROFILE.request,
    safeSaga(updateProfile, UPDATE_PROFILE.error)
  );
  yield takeLatest(
    ADD_ADDRESS.request,
    safeSaga(addAddress, ADD_ADDRESS.error)
  );
  yield takeLatest(
    EDIT_ADDRESS.request,
    safeSaga(editAddress, EDIT_ADDRESS.error)
  );
  yield takeLatest(
    GET_ADDRESS.request,
    safeSaga(getAddress, GET_ADDRESS.error)
  );
  yield takeLatest(
    DELETE_ADDRESS.request,
    safeSaga(deleteAddress, DELETE_ADDRESS.error)
  );
  yield takeLatest(
    ADD_CART.request,
    safeSaga(addCart, ADD_CART.error)
  );
  yield takeLatest(
    GET_CART.request,
    safeSaga(getCart, GET_CART.error)
  );
  yield takeLatest(
    GET_FAVOURITE.request,
    safeSaga(getFavourite, GET_FAVOURITE.error)
  );
  yield takeLatest(
    GET_TEAM_MEMBERS.request,
    safeSaga(getMembers, GET_TEAM_MEMBERS.error)
  );
  yield takeLatest(
    GET_PENDING_INVITATION.request,
    safeSaga(getPendingInvitation, GET_PENDING_INVITATION.error)
  );
  yield takeLatest(GET_ME.request, safeSaga(getMe, GET_ME.error));
  yield takeLatest(
    DELETE_PODIO.request,
    safeSaga(deletePodio, DELETE_PODIO.error)
  );
}
