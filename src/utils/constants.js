const commonState = {
  processing: false,
  processed: false,
  success: null,
  errors: {},
  message: "",
};

export const defaultSingleObjectState = {
  ...commonState,
  data: {},
};
export const defaultSingleObjectArrayState = {
  ...commonState,
  data: [],
};

export const defaultManyObjectState = {
  ...commonState,
  data: [],
  pagination: {
    currentPage: "",
    nextPage: "",
    totalEntries: 0,
  },
};
