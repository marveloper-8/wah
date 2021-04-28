import { SET_ORGS } from "../constants/sync";

const INITIAL_STATE = {
  orgs: null,
};

const syncReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ORGS:
      return {
        ...state,
        orgs: action.payload,
      };
    default:
      return state;
  }
};

export default syncReducer;
