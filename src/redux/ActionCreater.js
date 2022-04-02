import { ADD_STAFF, SEARCH_VALUE } from "./ActionType";

export const addStaff = (
  id,
  name,
  doB,
  salaryScale,
  startDate,
  department,
  annualLeave,
  overTime,
  image
) => ({
  type: ADD_STAFF,
  payload: {
    id: id,
    name: name,
    doB: doB,
    salaryScale: salaryScale,
    startDate: startDate,
    department: department,
    annualLeave: annualLeave,
    overTime: overTime,
    image: image,
  },
});

export const searchValueInput = (searchValue) => ({
  type: SEARCH_VALUE,
  payload: searchValue,
});
