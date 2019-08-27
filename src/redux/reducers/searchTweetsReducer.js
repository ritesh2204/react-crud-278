import {
  FETCH_SEARCH_TWEETS,
  RESPONSE_SEARCH_TWEETS,
  ERROR_SEARCH_TWEETS
} from "../actions/searchTweetsAction";

const initialState = {
  searchTweets: [],
  isFetch: false,
  error: null,
  page: 1,
  limit: 10
};

const searchTweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_TWEETS:
      return {
        ...state,
        isFetch: action.payload.paged === 1 ? true : false,
        page: action.payload.paged,
        error: null
      };
    case RESPONSE_SEARCH_TWEETS:
      return {
        ...state,
        isFetch: false,
        error: null,
        searchTweets: [...state.tweets, ...action.payload]
      };
    case ERROR_SEARCH_TWEETS:
      return { ...state, error: action.payload, isFetch: false };
    default:
      return { ...state };
  }
};

export default searchTweetsReducer;
