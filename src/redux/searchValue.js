import { SEARCH_VALUE } from "./ActionType";
const initState = {
  search: "",
};

export const searchValue = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
