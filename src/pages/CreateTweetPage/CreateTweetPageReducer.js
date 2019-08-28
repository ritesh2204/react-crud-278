import {
  REQUEST_CREATE_TWEET,
  RESPONSE_CREATE_TWEET,
  ERROR_CREATE_TWEET,
  UPDATE_CREATE_TWEET_FIELDS
} from "./CreateTweetPageActions";

const initialState = {
  id: "",
  text: "",
  user: {
    name: ""
  }
};

const createTweetPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CREATE_TWEET_FIELDS:
      return { ...state, [action.payload.key]: action.payload.value };
    case REQUEST_CREATE_TWEET:
      return { ...state, isFetch: true, error: null };
    case RESPONSE_CREATE_TWEET:
      return { ...state, isFetch: false, error: null, tweet: action.payload };
    case ERROR_CREATE_TWEET:
      return { ...state, isFetch: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default createTweetPageReducer;
