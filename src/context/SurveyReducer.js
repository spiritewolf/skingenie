export default (state, action) => {
  switch (action.type) {
    case 'GET_RESPONSE':
      return {
        ...state,
        responses: action.payload,
      };
    case 'GET_RESULTS':
      return {
        ...state,
        result: action.payload,
        cleanser: action.payload[0].cleanser,
        moisturizer: action.payload[0].moisturizer,
        serum: action.payload[0].serum,
        sunscreen: action.payload[0].sunscreen,
      };
	 case 'ADD_SCORE':
	 	return {
			...state,
			scores: state.scores != null ? [...state.scores, action.payload] : action.payload,
			...action.payload
		}
	case 'CLEAR_SCORES':
		return {
			...state,
			scores: null,
			...action.payload
		}
    default:
      return state;
  }
};
