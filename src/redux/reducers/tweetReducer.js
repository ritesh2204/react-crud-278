import {
  FETCH_TWEETS,
  RESPONSE_TWEETS,
  ERROR_TWEETS
} from "../actions/tweetAction";

const initialState = {
  tweets: [],
  isFetch: false,
  error: null,
  page: 1,
  limit: 10
};

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        isFetch: action.payload.page === 1 ? true : false,
        page: action.payload.page,
        error: null
      };
    case RESPONSE_TWEETS:
      return {
        ...state,
        isFetch: false,
        error: null,
        tweets: [...state.tweets, ...action.payload]
      };
    case ERROR_TWEETS:
      return { ...state, error: action.payload, isFetch: false };
    default:
      return { ...state };
  }
};

export default tweetReducer;
