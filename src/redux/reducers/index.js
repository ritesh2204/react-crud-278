import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import userReducer from "./userReducer";
import individualTweetReducer from "./individualtweetReducer";
import searchTweetsReducer from "./searchTweetsReducer";

const rootReducer = combineReducers({
  tweetReducer,
  userReducer,
  individualTweetReducer,
  searchTweetsReducer
});

export default rootReducer;
