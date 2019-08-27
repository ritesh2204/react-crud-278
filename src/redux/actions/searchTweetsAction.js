import axios from "axios";
export const FETCH_SEARCH_TWEETS = "FETCH_SEARCH_TWEETS";
export const RESPONSE_SEARCH_TWEETS = "RESPONSE_SEARCH_TWEETS";
export const ERROR_SEARCH_TWEETS = "ERROR_SEARCH_TWEETS";

export const fetchTweetActionType = payload => ({
  type: FETCH_SEARCH_TWEETS,
  payload
});

const responseTweetActionType = payload => ({
  type: RESPONSE_SEARCH_TWEETS,
  payload
});

const errorTweetActionType = payload => ({
  type: ERROR_SEARCH_TWEETS,
  payload
});

export const searchTweetsActionCreator = payload => dispatch => {
  dispatch(fetchTweetActionType(payload));
  console.log(payload);
  axios
    .get(`http://13.232.242.50:33138/tweets?text_like=${payload.text}`)
    .then(res => {
      console.log(res.data);
      dispatch(responseTweetActionType(res.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(errorTweetActionType(error.message));
    });
};
