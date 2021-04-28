import {
  GET_ORGANISATIONS,
  GET_SPACES,
  GET_APPS,
  CREATE_TEMPLATE,
  GET_TEMPLATES,
  DELETE_TEMPLATE,
} from "../constants/print";

export const getOrgs = () => ({
  type: GET_ORGANISATIONS.request,
});
export const getSpaces = (payload) => ({
  type: GET_SPACES.request,
  payload,
});
export const getApps = (payload) => ({
  type: GET_APPS.request,
  payload,
});

export const createTemplate = (payload) => ({
  type: CREATE_TEMPLATE.request,
  payload,
});
export const getTemplates = () => ({
  type: GET_TEMPLATES.request,
});
export const deleteTemplate = (payload) => ({
  type: DELETE_TEMPLATE.request,
  payload,
});
