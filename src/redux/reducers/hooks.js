import {
  defaultSingleObjectArrayState,
  defaultSingleObjectState,
} from "../../utils/constants";
import { extractStatus, handleReduxAction } from "../../helpers/reduxHelpers";
import { HOOKSLOG, HOOKS_PAGE, WIDGETS, ORGS } from "../constants/hooks";

const defaultPayload = {
  data: [],
  errors: [],
};
const initialState = {
  orgs: defaultSingleObjectArrayState,
  widgets: defaultSingleObjectArrayState,
  hooksLog: defaultSingleObjectArrayState,
  hookPage: defaultSingleObjectState,
};

const hooksReducer = (
  state = initialState,
  { type, payload = defaultPayload }
) => {
  const status = extractStatus(type);

  switch (type) {
    case ORGS.success:
      return handleReduxAction(state, payload, status, "orgs");
    case WIDGETS.success:
      return handleReduxAction(state, payload, status, "widgets");
    case HOOKSLOG.success:
      return handleReduxAction(state, payload, status, "hooksLog");
    case HOOKS_PAGE.success:
      return handleReduxAction(state, payload, status, "hookPage");
    default:
      return state;
  }
};

export default hooksReducer;
