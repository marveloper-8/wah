export default function asyncHandler(handler) {
  return async (data, id) => {
    try {
      return await handler(data, id);
    } catch (ex) {
      throw ex;
    }
  };
}
