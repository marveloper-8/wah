import {
  INITIAL_STATE,
  ADD_SECTION,
  ADD_FIELD,
  MOVE_SECTION,
  MOVE_FIELD,
  REMOVE_SECTION,
  REMOVE_FIELD,
  UPDATE_FIELD_DETAIL,
  UPDATE_SECTION_DETAIL,
} from "../constants/appBuilder";
import { v4 } from "uuid";

const initials = {
  appSections: [],
  draggedSection: undefined,
  unique_hash: undefined,
};

const appBuilderReducer = (state = initials, action) => {
  switch (action.type) {
    case INITIAL_STATE:
      return {
        ...state,
        appSections: action.payload.appSections,
        unique_hash: action.payload.unique_hash,
      };

    case ADD_SECTION:
      let id = action.payload.default_id ? action.payload.default_id : v4();

      return {
        ...state,
        draggedSection: {
          id,
          type: action.payload.type,
          name: action.payload.name,
          columns: {
            first_column: [],
            second_column: [],
            third_column: [],
            fourth_column: [],
          },
        },
        appSections: [
          ...state.appSections,
          {
            id: id,
            type: action.payload.type,
            name: action.payload.name,
            section_details: {},
            columns: {
              first_column: [],
              second_column: [],
              third_column: [],
              fourth_column: [],
            },
          },
        ],
      };

    case ADD_FIELD: {
      let field_id = action.payload.field_id ? action.payload.field_id : v4();

      let sectionIndex = state.appSections.findIndex(
        (section) => section.id === action.payload.sectionId
      );
      let currentState = [...state.appSections];
      let selectedColumn = action.payload.columnType;

      let columns = [
        "first_column",
        "second_column",
        "third_column",
        "fourth_column",
      ];

      if (columns.indexOf(selectedColumn) > -1) {
        currentState[sectionIndex] = {
          ...currentState[sectionIndex],
          columns: {
            ...currentState[sectionIndex].columns,
            [selectedColumn]: [
              ...currentState[sectionIndex].columns[selectedColumn],
              {
                field_id: field_id,
                type: action.payload.type,
                label: action.payload.label,
                column_type: selectedColumn,
                section_id: action.payload.sectionId,
                config: action.payload.config ? action.payload.config : {},
                ...((action.payload.external_id) && { external_id: action.payload.external_id }),
                ...((action.payload.status) && { status: action.payload.status }),
              },
            ],
          },
        };
      }

      return {
        ...state,
        draggedSection: {
          field_id: field_id,
          type: action.payload.type,
          label: action.payload.label,
          column_type: selectedColumn,
          section_id: action.payload.sectionId,
          config: action.payload.config ? action.payload.config : {},
        },
        appSections: currentState,
      };
    }

    case UPDATE_SECTION_DETAIL: {
      let sectionIndex = state.appSections.findIndex(
        (section) => section.id === action.payload.sectionId
      );

      let currentState = [...state.appSections];

      currentState[sectionIndex] = {
        ...currentState[sectionIndex],
        section_details: {
          ...currentState[sectionIndex].section_details,
          ...action.payload.section_details
        }
      };

      return {
        ...state,
        appSections: currentState,
      };
    }

    case UPDATE_FIELD_DETAIL: {
      let sectionIndex = state.appSections.findIndex(
        (section) => section.id === action.payload.sectionId
      );

      let currentState = [...state.appSections];
      let selectedColumn = action.payload.columnType;
      let columns = [
        "first_column",
        "second_column",
        "third_column",
        "fourth_column",
      ];
      if (columns.indexOf(selectedColumn) > -1 && currentState[sectionIndex]) {
        currentState[sectionIndex] = {
          ...currentState[sectionIndex],
          columns: {
            ...currentState[sectionIndex].columns,
            [selectedColumn]: currentState[sectionIndex].columns[
              selectedColumn
            ].map((field) =>
              field.field_id === action.payload.fieldId
                ? {
                  ...field,
                  ...((action.payload.label) && { label: action.payload.label }),
                  ...((action.payload.external_id) && { external_id: action.payload.external_id }),
                  ...((action.payload.status) && { status: action.payload.status }),
                  ...((action.payload.config) && {
                    config: {
                      ...field.config,
                      ...action.payload.config
                    }
                  })
                }
                : field
            ),
          },
        };
      }

      return {
        ...state,
        appSections: currentState,
      };
    }

    case MOVE_SECTION: {
      return { ...state };
    }

    case MOVE_FIELD: {
      return {
        ...state,
      };
    }

    case REMOVE_SECTION: {
      const deleteSection = state.appSections.filter(
        (section) => section.id !== action.payload
      );

      return {
        ...state,
        appSections: deleteSection,
        draggedSection: action.payload,
      };
    }

    case REMOVE_FIELD: {
      let sectionIndex = state.appSections.findIndex(
        (section) => section.id === action.payload.sectionId
      );

      let currentState = [...state.appSections];

      let columns = [
        "first_column",
        "second_column",
        "third_column",
        "fourth_column",
      ];
      let selectedColumn = action.payload.columnType;

      if (columns.indexOf(selectedColumn) > -1) {
        currentState[sectionIndex] = {
          ...currentState[sectionIndex],
          columns: {
            ...currentState[sectionIndex].columns,
            [selectedColumn]: currentState[sectionIndex].columns[
              selectedColumn
            ].filter((field) => field.field_id !== action.payload.fieldId),
          },
        };
      }

      return {
        ...state,
        appSections: currentState,
      };
    }

    default:
      return state;
  }
};

export default appBuilderReducer;
