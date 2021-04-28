
export function extractStatus(type) {
  let status = type.split("_").pop();

  if (status !== "ERROR" && status !== "SUCCESS") {
    status = "REQUEST";
  }

  return status;
}

/**
 * This creates a success, request and error action for the specified action name
 * This makes creating action types a lot easier and less repetitive.
 * @param name The name of the action
 */
export function createActionType(name) {
  return {
    request: `${name}_REQUEST`,
    success: `${name}_SUCCESS`,
    error: `${name}_ERROR`,
  };
}

/**
 * This returns an action creator function that you can easily use in a
 * dispatch in your components.
 * @param actionType a string that makes specifies the action type
 */
export function generateActionCreator(actionType) {
  const actionCreator = (payload) => ({
    type: actionType,
    payload,
  });

  return actionCreator;
}

export function handleReduxAction(
  state,
  payload,
  status,
  key
) {
  const { data, errors } = payload;

  if (status === "REQUEST") {
    return {
      ...state,
      [key]: {
        ...state[key],
        processing: true,
        processed: false,
      },
    };
  } else if (status === "SUCCESS") {
    return {
      ...state,
      [key]: {
        ...state[key],
        processing: false,
        success: true,
        processed: true,
        data,
      },
    };
  }

  return {
    ...state,
    [key]: {
      ...state[key],
      processing: false,
      success: false,
      processed: true,
      errors,
    },
  };
}

export function handleInfiniteScrollReduxState(
  state,
  payload,
  status,
  key,
  resetWhenPageNumberIsOne = true
) {
  const { data = [], pageNumber = 1, paginationMeta } = payload;

  if (status === "REQUEST" || status === "ERROR") {
    const newState = handleReduxAction(state, payload, status, key);

    if (pageNumber === 1) {
      newState[key]["data"] = [];
    }

    return newState;
  }

  const pageShouldReset =
    resetWhenPageNumberIsOne && paginationMeta?.currentPage === 1;

  let newData = [...state[key].data, ...data];

  if (pageShouldReset) {
    newData = data;
  }

  return {
    ...state,
    [key]: {
      ...state[key],
      processing: false,
      success: true,
      processed: true,
      data: newData,
      paginationMeta,
    },
  };
}

export function complexUpdate(payload, state, postKey) {
  const { data: updatedPost } = payload;

  const existingFeed = state[postKey].data.map((post) => {
    if (post.id === updatedPost.id) {
      return {
        ...post,
        ...updatedPost,
      };
    }

    return post;
  });

  return {
    ...state,
    [postKey]: {
      ...state[postKey],
      data: existingFeed,
    },
  };
}