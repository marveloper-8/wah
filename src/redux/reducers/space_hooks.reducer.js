const initials = [];

const SpaceHooksReducers = (state = initials, actions) => {
  switch (actions.type) {
    case "SET_SPACE_HOOKS": {
      return {
        ...state.spaces, //Get current state
        spaces: actions.payload, //Push space hooks to state
      };
    }

    case "DIS_SPACE_HOOKS": {
      return { ...state.spaces, spaces: actions.payload };
    }

    case "DESTROY_SPACE_HOOKS": {
      return { ...state.spaces, spaces: initials };
    }

    case "UPDATE_SPACE_HOOKS": {
      const updated = state.map((item) => {
        //Loop through data to find key
        if (item.org_id === actions.payload.hook_id) {
          return { ...actions.hooks }; //Update
        } else {
          return item;
        }
      });

      return {
        ...state.spaces,
        spaces: updated,
      };
    }

    case "REMOVE_SPACE_HOOKS": {
      const deleteHooks = [
        ...state.spaces.filter(
          (item) => item.hook_id !== actions.payload.hook_id
        ),
      ];

      return {
        ...state,
        spaces: deleteHooks,
      };
    }

    default:
      return state;
  }
};

export default SpaceHooksReducers;
