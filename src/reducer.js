export const initialState = {
  searchComponent: false,
  language: false,
  auth: false,
  user: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ON_SEARCH":
      return {
        ...state,
        searchComponent: !state.searchComponent,
      };
    case "ON_LANGUAGE":
      return {
        ...state,
        language: !state.language,
      };
    case "ON_AUTH":
      return {
        ...state,
        auth: !state.auth,
      };

    default:
      return state;
  }
};
export default reducer;
