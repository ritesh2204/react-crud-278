import axios from "axios";
export const FETCH_TWEETS = "FETCH_TWEETS";
export const RESPONSE_TWEETS = "RESPONSE_TWEETS";
export const ERROR_TWEETS = "ERROR_TWEETS";

export const fetchTweetActionType = payload => ({
  type: FETCH_TWEETS,
  payload
});

const responseTweetActionType = payload => ({
  type: RESPONSE_TWEETS,
  payload
});

const errorTweetActionType = payload => ({ type: ERROR_TWEETS, payload });

export const getTweetsActionCreator = payload => dispatch => {
  dispatch(fetchTweetActionType(payload));
  axios
    .get(
      `http://13.232.242.50:33138/tweets?_page=${payload.paged}&_limit=${payload.limit}`
    )
    .then(res => {
      dispatch(responseTweetActionType(res.data));
    })
    .catch(error => {
      dispatch(errorTweetActionType(error.message));
    });
};
