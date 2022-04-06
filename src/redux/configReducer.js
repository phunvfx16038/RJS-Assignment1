import { createStore, combineReducers, applyMiddleware } from "redux";
import { staffs } from "./staff";
import { departments } from "./department";
import { searchValue } from "./searchValue";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { staffsSalary } from "./salaryStaff";

export const configStore = () => {
  const store = createStore(
    combineReducers({
      staffs: staffs,
      departments: departments,
      searchValue: searchValue,
      staffsSalary: staffsSalary,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
