import { defaultSingleObjectArrayState } from "../../utils/constants";
import { extractStatus, handleReduxAction } from "../../helpers/reduxHelpers";
import {
  GET_ORGANISATIONS,
  GET_SPACES,
  GET_APPS,
  GET_TEMPLATES,
  DELETE_TEMPLATE,
} from "../constants/print";

const defaultPayload = {
  data: [],
  errors: [],
};
const initialState = {
  organisations: defaultSingleObjectArrayState,
  spaces: defaultSingleObjectArrayState,
  apps: defaultSingleObjectArrayState,
  templates: defaultSingleObjectArrayState,
};

const printReducer = (
  state = initialState,
  { type, payload = defaultPayload }
) => {
  const status = extractStatus(type);

  switch (type) {
    case GET_ORGANISATIONS.request:
    case GET_ORGANISATIONS.success:
    case GET_ORGANISATIONS.error:
      return handleReduxAction(state, payload, status, "organisations");
    case GET_SPACES.request:
    case GET_SPACES.success:
    case GET_SPACES.error:
      return handleReduxAction(state, payload, status, "spaces");
    case GET_APPS.request:
    case GET_APPS.success:
    case GET_APPS.error:
      return handleReduxAction(state, payload, status, "apps");
    case GET_TEMPLATES.request:
    case GET_TEMPLATES.success:
    case GET_TEMPLATES.error:
      return handleReduxAction(state, payload, status, "templates");
    case DELETE_TEMPLATE.success:
   
      return {
        ...state,
        templates: {
          ...state.templates,
          data: state.templates.data.filter(
            (template) => template.id !== payload
          ),
        },
      };
    default:
      return state;
  }
};

export default printReducer;
