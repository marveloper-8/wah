import { GET_COLLECTIONS } from "../constants/rawData";
import { defaultSingleObjectArrayState } from "../../utils/constants";
import { extractStatus, handleReduxAction } from "../../helpers/reduxHelpers";

const defaultPayload = {
  data: [],
  errors: [],
};
const initialState = {
  collections: defaultSingleObjectArrayState,
};

const rawDataReducer = (
  state = initialState,
  { type, payload = defaultPayload }
) => {
  const status = extractStatus(type);

  switch (type) {
    case GET_COLLECTIONS.request:
    case GET_COLLECTIONS.success:
    case GET_COLLECTIONS.error:
      return handleReduxAction(state, payload, status, "collections");

    default:
      return state;
  }
};

export default rawDataReducer;
