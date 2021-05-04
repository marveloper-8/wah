export const testRequest = {
  GET_COLUMNS: "/sync/app/23103122?org_id=1473960&db=ThatApp_4814&api_v2=true",
  GET_DATA:
    "/sync/app/items/23103122?org_id=1473960&database=ThatApp_4814&api_v2=true&skip=0&limit=100",
};

const api = "https://wah20.prodevs.io/api"

export const userRequest = {
  PLANS: "/sync/billing/plans",
  INVOICES: "/account/invoices",
  BUY_PLAN: "/sync/billing/register/plan",
  INVITE: `/user/profile-update`,
  TEAM_MEMBERS: "/sync/podio/team/members",
  PENDING_INVITATION: "/sync/podio/invites",
  DELETE_INVITE: "/sync/podio/delete/invites",
  ME: `/auth/me`,
  DELETE_PODIO: "/sync/podio/disconnect",

  // user
  UPDATE_PROFILE: `/user/profile-update`,
  ADD_ADDRESS: `/user/delivery-address`,
  EDIT_ADDRESS: `/user/delivery-address`,
  GET_ADDRESS: `/user/display-delivery-address`,
  DELETE_ADDRESS: `/user/delivery-address/delete`,
  ADD_CART: `/cart/process`,
  UPDATE_CART: `/cart/update-item-quantity`,
  GET_CART: `/cart/items`,
  ADD_FAVOURITE: `/product/favorite`,
  GET_FAVOURITE: `/product/view-favorite`,
  GET_BANK: `/banks/mine`,
};
export const OrganisationRequest = {
  DELETE_SELECTED: "/sync/podio/permanent_delete/items",
  RESTORE_SELECTED: "/sync/podio/restore/items",
};
export const rawDataRequest = {
  COLLECTION: "/account/collection/list?collection_type=mongo",
};
export const printRequest = {
  ORGANIZATIONS: "/print/podio/organizations",
  SPACES: "/print/podio/organization/:id/workspaces",
  APPS: "/print/podio/workspace/:id/apps",
  CREATE: "/print/template/create",
  TEMPLATES: "/print/template/list",
  DELETE: "/print/template/destroy"
};
