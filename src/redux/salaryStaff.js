import {
  ADD_SALARY_STAFF,
  SALARY_STAFF_FAILED,
  SALARY_STAFF_LOADING,
} from "./ActionType.js";

export const staffsSalary = (
  state = { isLoading: true, errMess: null, staffsSalary: [] },
  action
) => {
  switch (action.type) {
    case ADD_SALARY_STAFF:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffsSalary: action.payload,
      };
    case SALARY_STAFF_LOADING:
      return { ...state, isLoading: true, errMess: null, staffsSalary: [] };

    case SALARY_STAFF_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
