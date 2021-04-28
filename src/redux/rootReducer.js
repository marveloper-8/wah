import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer.js";
import syncReducer from "./reducers/sync.reducer.js";
import sidebarReducer from "./reducers/sidebar.reducer.js";
import getPodioAccounts from "./reducers/podioAccounts";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import orgsReducer from "./reducers/orgs.reducer";
import syncing from "./reducers/syncAnOrganization";
import getALLsyncedOrgs from "./reducers/getAllSyncedOrgs";
import getALLUnsyncedOrgs from "./reducers/getAllUnSyncedOrgs";
import SpaceHooksReducers from "./reducers/space_hooks.reducer";
import AppHooksReducers from "./reducers/app_hooks.reducer";
import AppBuilderReducers from "./reducers/app_builder.reducer";
import AppItemsReducers from "./reducers/app_items.reducer";
import liveDataReducers from "./reducers/test";
import hooksReducer from "./reducers/hooks";
import rawDataReducer from "./reducers/rawDataReducer";
import printReducer from "./reducers/print";

import { AUTH_LOGOUT } from "./constants/actionsTypes";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "sync", "nav", "orgs", "space_hooks"],
};

const appReducer = combineReducers({
  user: userReducer,
  sync: syncReducer,
  nav: sidebarReducer,
  orgs: orgsReducer,
  podio: getPodioAccounts,
  syncing,
  getALLsyncedOrgs,
  getALLUnsyncedOrgs,
  space_hooks: SpaceHooksReducers,
  app_hooks: AppHooksReducers,
  liveData: liveDataReducers,
  hooks: hooksReducer,
  rawData: rawDataReducer,
  print: printReducer,
  app_builder: AppBuilderReducers,
  app_items: AppItemsReducers,
});

export const rootReducer = (state, action) => {
  if (action.type === AUTH_LOGOUT) {
    storage.removeItem("persist:root"); //clear redux-persist
    state = undefined;
    localStorage.clear();
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
