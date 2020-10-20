export default (state, action) => {
  switch (action.type) {
    case "GET_RESPONSE":
      return {
        ...state,
        responses: action.payload,
      };
  }
};
