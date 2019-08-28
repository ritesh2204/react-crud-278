import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import searchTweetsReducer from "./searchTweetsReducer";
import createTweetReducer from "../../pages/CreateTweetPage/CreateTweetPageReducer";
import individualTweetReducer from "../../pages/TweetPage/TweetPageReducer";

const rootReducer = combineReducers({
  tweetReducer,
  individualTweetReducer,
  createTweetReducer,
  searchTweetsReducer
});

export default rootReducer;
