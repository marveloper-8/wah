const initials = [];

const AppHooksReducers = (state = initials, actions) => {
  switch (actions.type) {
    case "SET_APP_HOOKS": {
      return {
        ...state, //Get current state
        apps: [...state, actions.hooks], //Push organization to state
      };
    }

    case "DIS_APP_HOOKS": {
      return { ...state, apps: actions.hooks };
    }

    case "DESTROY_APP_HOOKS": {
      return { ...state, apps: initials };
    }

    case "UPDATE_APP_HOOKS": {
      const updated = state.map((item) => {
        //Loop through data to find key
        if (item.org_id === actions.hooks.hook_id) {
          return { ...actions.hooks }; //Update
        } else {
          return item;
        }
      });

      return {
        ...state,
        apps: updated,
      };
    }

    case "REMOVE_APP_HOOKS": {
      const deleteHooks = [
        ...state.filter((item) => item.org_id !== actions.hooks.hook_id),
      ];

      return {
        ...state,
        apps: deleteHooks,
      };
    }

    default:
      return state;
  }
};

export default AppHooksReducers;
