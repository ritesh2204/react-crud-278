import axios from "axios";

import { responseTweetActionType } from "../../redux/actions/tweetAction";

export const REQUEST_CREATE_TWEET = "REQUEST_CREATE_TWEET";
export const RESPONSE_CREATE_TWEET = "RESPONSE_CREATE_TWEET";
export const ERROR_CREATE_TWEET = "ERROR_CREATE_TWEET";
export const UPDATE_CREATE_TWEET_FIELDS = "UPDATE_CREATE_TWEET_FIELDS";

export const fetchActionType = payload => ({
  type: REQUEST_CREATE_TWEET,
  payload
});

const responseActionType = payload => ({
  type: RESPONSE_CREATE_TWEET,
  payload
});

const errorActionType = payload => ({
  type: ERROR_CREATE_TWEET,
  payload
});

const updateFieldActionType = payload => ({
  type: UPDATE_CREATE_TWEET_FIELDS,
  payload
});

export const updateFieldActionCreator = payload => dispatch => {
  dispatch(updateFieldActionType(payload));
};

export const createTweetsActionCreator = payload => dispatch => {
  dispatch(fetchActionType(payload));
  axios({
    method: "post",
    url: "http://13.232.242.50:33138/tweets",
    data: payload,
    config: { headers: { "Content-Type": "application/json" } }
  })
    .then(function(response) {
      //handle success
      dispatch(responseTweetActionType([response.data]));
    })
    .catch(function(error) {
      //handle error
      dispatch(errorActionType(error));
    });
};
