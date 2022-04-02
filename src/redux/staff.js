import { STAFFS, DEPARTMENTS } from "../Data/staffs.jsx";
import { ADD_STAFF } from "./ActionType.js";

export const staffs = (state = STAFFS, action) => {
  switch (action.type) {
    case ADD_STAFF:
      let staff = action.payload;
      staff.id = state.length;
      staff.department = DEPARTMENTS.filter((DEPARTMENT) => {
        return DEPARTMENT.name
          .toLowerCase()
          .includes(staff.department.toLowerCase());
      });

      return [...state, action.payload];
    // state.concat(staff)
    default:
      return state;
  }
};
