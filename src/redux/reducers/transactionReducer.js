const initialState = {
  transactions: [],
  isFetch: false,
  error: null
};

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRANSACTION":
      return { ...state, isFetch: true, error: null };

    case "RESPONSE_TRANSACTION":
      return {
        ...state,
        isFetch: false,
        error: null,
        transactions: action.payload
      };

    case "ERROR_TRANSACTION":
      return {
        ...state,
        isFetch: false,
        error: action.payload
      };

    default:
      return { ...state };
  }
};

export default transactionReducer;
