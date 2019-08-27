const initialState = {
  friends: [],
  isFetch: false,
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FRIENDS":
      return { ...state, isFetch: true, error: null };

    case "RESPONSE_FRIENDS":
      return { ...state, isFetch: false, error: null, friends: action.payload };

    case "ERROR_FRIENDS":
      return { ...state, error: action.payload, isFetch: false };

    default:
      return { ...state };
  }
};

export default friendsReducer;
