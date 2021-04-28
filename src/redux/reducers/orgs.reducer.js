import { SET_AUDIT_ORGS } from "../constants/orgs";

const INITIAL_STATE = {
  orgs: null,
};

const orgsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUDIT_ORGS:
      return {
        ...state,
        orgs: action.payload,
      };
    default:
      return state;
  }
};

export default orgsReducer;
