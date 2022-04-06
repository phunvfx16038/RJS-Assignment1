import {
  ADD_DEPARTMENT,
  DEPARTMENT_FAILED,
  DEPARTMENT_LOADING,
} from "./ActionType.js";

export const departments = (
  state = { isLoading: true, errMess: null, departments: [] },
  action
) => {
  switch (action.type) {
    case ADD_DEPARTMENT:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        departments: action.payload,
      };
    case DEPARTMENT_LOADING:
      return { ...state, isLoading: true, errMess: null, departments: [] };

    case DEPARTMENT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
