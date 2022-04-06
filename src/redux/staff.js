import {
  ADD_NEW_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  EDIT_STAFF,
  STAFF_FAILED,
  STAFF_LOADING,
} from "./ActionType.js";

export const staffs = (
  state = { isLoading: true, errMess: null, staffs: [] },
  action
) => {
  switch (action.type) {
    case ADD_STAFF:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: action.payload,
      };
    case ADD_NEW_STAFF:
      return { ...state, staffs: action.payload };
    case EDIT_STAFF:
      return { ...state, staffs: action.payload };
    case DELETE_STAFF:
      return { ...state, staffs: action.payload };
    case STAFF_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs: [] };

    case STAFF_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
