import {
  INITIAL_APP_ITEM_STATE,
  ADD_ITEM,
  ADD_VALUE,
} from "../constants/appItems";

const initials = {
  externalIds: [],
  types: [],
  values: {},
};

const isObject = (obj) => {
  let type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}
const appItemsReducer = (state = initials, action) => {
  switch (action.type) {

    case INITIAL_APP_ITEM_STATE:
      return {
        ...state,
        externalIds: [],
        types: [],
        values: {},
      };

    case ADD_ITEM: {
      let currentExternalIds = [...state.externalIds];
      let currentTypes = [...state.types];

      currentExternalIds.push(...action.payload.externalIds)
      currentTypes.push(...action.payload.types)

      return {
        ...state,
        externalIds: currentExternalIds,
        types: currentTypes,
      };
    }

    case ADD_VALUE: {
      let payload = {[action.payload.name]: action.payload.value}
      if (isObject(action.payload.value)) {
        payload = {[action.payload.name]: {
            ...state.values[action.payload.name],
            ...action.payload.value
        }}
      }
      return {
        ...state,
        values: {
          ...state.values,
          ...payload
        }
      };
    }

    default:
      return state;
  }
};

export default appItemsReducer;
