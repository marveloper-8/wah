import { GET_COLLECTIONS } from "../constants/rawData";

export const getCollection = () => ({
  type: GET_COLLECTIONS.request,
});
