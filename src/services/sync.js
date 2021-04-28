import axios from "../config";
import asyncHandler from "../utils/asyncHandler";

export const syncOrganization = asyncHandler(
  async (query) => await axios.post(`/sync/podio/org${query}`)
);

export const syncFileHaven = asyncHandler(
  async (query) => await axios.post(`/sync/podio/org${query}`)
);

export const syncSpaces = asyncHandler(
  async (query) => await axios.post(`/sync/podio/spaces${query}`)
);

export const syncApps = asyncHandler(
  async (query) => await axios.post(`/sync/podio/apps${query}`)
);

// Organizations
export const createOrganization = asyncHandler(
  async (data) => await axios.post(`/sync/podio/create/organization`, data)
);

export const deleteOrganization = asyncHandler(
  async (query) => await axios.post(`/sync/podio/delete/org${query}`)
);

export const getOrganizations = asyncHandler(
  async () => await axios.get(`/sync/podio/orgs/all`)
);

export const getOrganization = asyncHandler(
  async (id) => await axios.get(`/sync/podio/single/org/${id}`)
);

export const getSyncedOrganizations = asyncHandler(
  async () => await axios.get(`/sync/podio/orgs/synced`)
);

// Workspaces
export const getSpace = asyncHandler(
  async (query) => await axios.get(`/sync/podio/space/single${query}`)
);
export const getSpaces = asyncHandler(
  async (id) => await axios.get(`/sync/podio/audit/spaces?org_id=${id}`)
);

export const createSpace = asyncHandler(
  async (data) => await axios.post(`/sync/podio/create/space`, data)
);

export const updateSpace = asyncHandler(
  async (data) => await axios.post(`/sync/podio/update/space`, data)
);

export const deleteSpace = asyncHandler(
  async (query) => await axios.post(`/sync/podio/delete/space${query}`)
);

// Apps
export const getApp = asyncHandler(
  async (query) => await axios.get(`/sync/podio/app/single${query}`)
);

export const getApps = asyncHandler(
  // async (query) => await axios.get(`/sync/podio/audit/apps${query}`)
  async (query) => await axios.get(`/sync/getapps${query}`)
);

export const createApp = asyncHandler(
  async (data) => await axios.post(`/sync/podio/create/app`, data)
);

export const updateApp = asyncHandler(
  async (data) => await axios.post(`/sync/podio/update/app`, data)
);

export const deleteApp = asyncHandler(
  async (query) => await axios.post(`/sync/podio/delete/app${query}`)
);

export const getAppFields = asyncHandler(
  async (query) => await axios.get(`/sync/podio/app/fields/${query}`)
);
export const getAppSections = asyncHandler(
  async (query) => await axios.get(`/sync/podio/app_sections/${query}`)
);

export const createAppSection = asyncHandler(
  async (data) => await axios.post(`/sync/podio/create/app_section`, data)
);

export const updateAppSection = asyncHandler(
  async (data) => await axios.post(`/sync/podio/update/app_section`, data)
);

export const deleteAppSection = asyncHandler(
  async (data) => await axios.post(`/sync/podio/delete/app_section`, data)
);

// App Field 

export const deleteAppField = asyncHandler(
  async (data) => await axios.post(`/sync/podio/delete/app/field`, data)
)

// Icon Suggestions
export const iconSuggestions = asyncHandler(
  async (query) => await axios.get(`/sync/podio/icon/suggestions/${query}`)
);

//Audit
export const getAuditSpacesAndApps = asyncHandler(
  async (query) => await axios.get(`/sync/podio/audit/spaces_and_apps${query}`)
);
export const getAuditMembers = asyncHandler(
  async (query) => await axios.get(`/sync/podio/audit/members${query}`)
);

//Hooks
export const getHooksLog = asyncHandler(
  async (query = "") => await axios.get(`/hook-manager/analytics${query}`)
);
export const getHooksChart = asyncHandler(
  async (query = "") => await axios.get(`/hook-manager/chart${query}`)
);
export const hookKiller = asyncHandler(
  async (query = "") => await axios.post(`/hook-killer${query}`)
);
export const makeHookActive = asyncHandler(
  async (query = "") => await axios.post(`/sync/podio/hooks/verify${query}`)
);
export const makeHookDelete = asyncHandler(
  async (query = "") => await axios.post(`/sync/podio/hooks/delete${query}`)
);
export const makeHook = asyncHandler(
  async (query = "") => await axios.post(`/sync/podio/hooks/create${query}`)
);

//Common
export const setFrequencyData = asyncHandler(
  async (query) => await axios.post(`/sync/podio/frequency/save${query}`)
);
export const setOrgUpdate = asyncHandler(
  async (query) => await axios.post(`/sync/podio/edit/organisation${query}`)
);
export const updateMemberRole = asyncHandler(
  async (query) => await axios.post(`/sync/podio/space_member/role${query}`)
);

//Members
export const refreshMember = asyncHandler(
  async (query) => await axios.post(`/sync/podio/space/refresh/member${query}`)
);
export const addMember = asyncHandler(
  async (query) => await axios.post(`/sync/podio/space/add/member${query}`)
);
export const removeMember = asyncHandler(
  async (query) => await axios.post(`/sync/podio/space/remove/member${query}`)
);
export const banMember = asyncHandler(
  async (query) => await axios.post(`/sync/podio/remove/member${query}`)
);

//Haven
export const setupHaven = asyncHandler(
  async (query) => await axios.post(`/sync/podio/setup/haven${query}`)
);
export const deleteHaven = asyncHandler(
  async (query) => await axios.post(`/sync/podio/delete/haven${query}`)
);
export const restoreFileInHaven = asyncHandler(
  async (query) => await axios.post(`/sync/podio/restore/file${query}`)
);
export const downloadFiles = asyncHandler(
  async (query) => await axios.get(`/sync/podio/download/files${query}`)
);

//Items
export const createItem = asyncHandler(
  async (data) => await axios.post(`/sync/podio/create/item`, data)
);
export const editItem = asyncHandler(
  async (data) => await axios.post(`/sync/podio/edit/item`, data)
);
export const deleteItem = asyncHandler(
  async (data) => await axios.post(`/sync/podio/delete/item`, data)
);

//Billing
export const saveCard = asyncHandler(
    async (data) => await axios.post(`/sync/billing/add/card`, data)
);

export const fetchCards = asyncHandler(
    async () => await axios.get(`/sync/billing/cards`)
);

export const defaultCard = asyncHandler(
    async (data) => await axios.post(`/sync/billing/default/card`, data)
);

export const deleteCard = asyncHandler(
    async (data) => await axios.post(`/sync/billing/delete/card`, data)
);

//Plans
export const getPlans = asyncHandler(
    async () => await axios.get(`/sync/billing/plans`)
);

export const registerPlan = asyncHandler(
    async (data) =>  await axios.post(`/sync/billing/register/plan`, data)
);

export const changePlan = asyncHandler(
   async (data) =>  await axios.post(`/sync/billing/change/plan`, data)
);

//Public Routes
export const getPublicApp = asyncHandler(
  async (query) => await axios.get(`/sync/podio/public/app/single${query}`)
);

export const getPublicAppSections = asyncHandler(
  async (query) => await axios.get(`/sync/podio/public/app_sections/${query}`)
);
