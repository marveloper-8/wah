import { SET_USER } from "../constants/user";
import { AUTH_LOGOUT } from "../constants/actionsTypes";
import {
  defaultSingleObjectState,
  defaultSingleObjectArrayState,
} from "../../utils/constants";
import { extractStatus, handleReduxAction } from "../../helpers/reduxHelpers";
import {
  SEND_INVITE,
  DELETE_INVITE,
  GET_TEAM_MEMBERS,
  GET_PENDING_INVITATION,
  // GET_ME,
  DELETE_PODIO,
  UPDATE_PROFILE,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  GET_ADDRESS,
  DELETE_ADDRESS,
  ADD_CART
} from "../constants/user";

const INITIAL_STATE = {
  authUser: {
    isLoggedIn: false,
  },
  invite: defaultSingleObjectState,
  teamMembers: defaultSingleObjectArrayState,
  pendingInvitation: defaultSingleObjectArrayState,
  updateProfile: defaultSingleObjectArrayState,
  addAddress: defaultSingleObjectArrayState,
  editAddress: defaultSingleObjectArrayState,
  deleteAddress: defaultSingleObjectArrayState,
  getAddress: defaultSingleObjectArrayState,
  addCart: defaultSingleObjectArrayState,
};
const defaultPayload = {
  data: [],
  errors: [],
};

const userReducer = (
  state = INITIAL_STATE,
  { type, payload = defaultPayload }
) => {
  const status = extractStatus(type);

  switch (type) {
    case SET_USER:
      // case GET_ME.success:
      return {
        ...state,
        authUser: {
          isLoggedIn: true,
          ...payload,
        },
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        authUser: { isLoggedIn: false },
      };
    case SEND_INVITE.request:
    case SEND_INVITE.success:
    case SEND_INVITE.error:
      return handleReduxAction(state, payload, status, "invite");
    case DELETE_INVITE.request:
    case DELETE_INVITE.success:
    case DELETE_INVITE.error:
      return handleReduxAction(state, payload, status, "deleteInvite");
      // return state.pendingInvitation.data.filter((e) => e.email !== payload)
    case UPDATE_PROFILE.request:
    case UPDATE_PROFILE.success:
    case UPDATE_PROFILE.error:
      return handleReduxAction(state, payload, status, "updateProfile");
    case ADD_ADDRESS.request:
    case ADD_ADDRESS.success:
    case ADD_ADDRESS.error:
      return handleReduxAction(state, payload, status, "addAddress");
    case EDIT_ADDRESS.request:
    case EDIT_ADDRESS.success:
    case EDIT_ADDRESS.error:
      return handleReduxAction(state, payload, status, "editAddress");
    case GET_ADDRESS.request:
    case GET_ADDRESS.success:
    case GET_ADDRESS.error:
      return handleReduxAction(state, payload, status, "getAddress");
    case DELETE_ADDRESS.request:
    case DELETE_ADDRESS.success:
    case DELETE_ADDRESS.error:
      return handleReduxAction(state, payload, status, "deleteAddress");
    case ADD_CART.request:
    case ADD_CART.success:
    case ADD_CART.error:
      return handleReduxAction(state, payload, status, "addCart");
    case GET_TEAM_MEMBERS.request:
    case GET_TEAM_MEMBERS.success:
    case GET_TEAM_MEMBERS.error:
      return handleReduxAction(state, payload, status, "teamMembers");
    case GET_PENDING_INVITATION.request:
    case GET_PENDING_INVITATION.success:
    case GET_PENDING_INVITATION.error:
      return handleReduxAction(state, payload, status, "pendingInvitation");
    case DELETE_PODIO.success:
      return {
        ...state,
        authUser: {
          ...state.authUser,
          connected_platform: [],
        },
      };
    default:
      return state;
  }
};

export default userReducer;
