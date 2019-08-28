import {
  FETCH_INDIVIDUAL_TWEET,
  RESPONSE_INDIVIDUAL_TWEET,
  ERROR_INDIVIDUAL_TWEET
} from "./TweetPageAction";

const initialState = {
  tweet: null,
  isFetch: false,
  error: null
};

const individualTweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDIVIDUAL_TWEET:
      return { ...state, isFetch: true, error: null };
    case RESPONSE_INDIVIDUAL_TWEET:
      return { ...state, isFetch: false, error: null, tweet: action.payload };
    case ERROR_INDIVIDUAL_TWEET:
      return { ...state, isFetch: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default individualTweetReducer;
