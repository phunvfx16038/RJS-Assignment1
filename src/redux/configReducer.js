import { createStore, combineReducers } from "redux";
import { staffs } from "./staff";
import { departments } from "./department";
import { searchValue } from "./searchValue";

export const configStore = () => {
  const store = createStore(
    combineReducers({
      staffs: staffs,
      departments: departments,
      searchValue: searchValue,
    })
  );
  return store;
};
