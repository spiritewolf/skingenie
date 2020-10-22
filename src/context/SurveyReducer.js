export default (state, action) => {
  switch (action.type) {
    case "GET_RESPONSE":
      return {
        ...state,
        responses: action.payload,
      };
    case "LOAD_RESULTS":
      return {
        ...state,
        loading: true,
      };
    case "GET_RESULTS":
      return {
        ...state,
        loading: false,
        result: action.payload,
      };
    default:
      return state;
  }
};
