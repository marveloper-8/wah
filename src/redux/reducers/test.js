import { defaultSingleObjectArrayState } from "../../utils/constants";
import { extractStatus, handleReduxAction } from "../../helpers/reduxHelpers";
import {
  GET_COLUMNS,
  GET_DATA,
  GET_PLANS,
  GET_INVOICES,
  SELECT_ITEM,
  UN_SELECT_ITEM,
  DELETE_SELECTED,
  RESTORE_SELECTED,
} from "../constants/test";

const defaultPayload = {
  data: [],
  errors: [],
};
const initialState = {
  columns: defaultSingleObjectArrayState,
  dataSource: defaultSingleObjectArrayState,
  plans: defaultSingleObjectArrayState,
  invoices: defaultSingleObjectArrayState,
  selectedItems: [],
  deleteLoading: false,
  deleteSuccess: false,
};

const liveDataReducer = (
  state = initialState,
  { type, payload = defaultPayload }
) => {
  const status = extractStatus(type);

  switch (type) {
    case GET_COLUMNS.request:
    case GET_COLUMNS.success:
    case GET_COLUMNS.error:
      return handleReduxAction(state, payload, status, "columns");
    case GET_DATA.request:
    case GET_DATA.success:
    case GET_DATA.error:
      return handleReduxAction(state, payload, status, "dataSource");
    case GET_PLANS.request:
    case GET_PLANS.success:
    case GET_PLANS.error:
      return handleReduxAction(state, payload, status, "plans");
    case GET_INVOICES.request:
    case GET_INVOICES.success:
    case GET_INVOICES.error:
      return handleReduxAction(state, payload, status, "invoices");
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, payload],
      };
    case UN_SELECT_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter((item) => item !== payload),
      };
    case DELETE_SELECTED.request:
    case RESTORE_SELECTED.request:
      return {
        ...state,
        deleteLoading: true,
        deleteSuccess: false,
      };
    case DELETE_SELECTED.success:
    case RESTORE_SELECTED.success:
      return {
        ...state,
        selectedItems: [],
        deleteLoading: false,
        deleteSuccess: true,
      };
    case DELETE_SELECTED.error:
    case RESTORE_SELECTED.error:
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess: false,
      };
    default:
      return state;
  }
};

export default liveDataReducer;
