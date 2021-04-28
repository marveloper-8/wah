import { SET_NAV } from "../constants/sidebar";

const INITIAL_STATE = {
  nav: null,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAV:
      return {
        ...state,
        nav: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
