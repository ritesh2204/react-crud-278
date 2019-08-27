import { FETCH_USER, RESPONSE_USER, ERROR_USER } from "../actions/userAction";

const initialState = {
  users: [],
  isFetch: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, isFetch: true, error: null };
    case RESPONSE_USER:
      return { ...state, isFetch: false, error: null, users: action.payload };
    case ERROR_USER:
      return { ...state, error: action.payload, isFetch: false };
    default:
      return { ...state };
  }
};

export default userReducer;
