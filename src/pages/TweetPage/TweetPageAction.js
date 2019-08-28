import axios from "axios";
export const FETCH_INDIVIDUAL_TWEET = "FETCH_INDIVIDUAL_TWEET";
export const RESPONSE_INDIVIDUAL_TWEET = "RESPONSE_INDIVIDUAL_TWEET";
export const ERROR_INDIVIDUAL_TWEET = "ERROR_INDIVIDUAL_TWEET";

export const fetchActionType = payload => ({
  type: FETCH_INDIVIDUAL_TWEET,
  payload
});

const responseActionType = payload => ({
  type: RESPONSE_INDIVIDUAL_TWEET,
  payload
});

const errorActionType = payload => ({
  type: ERROR_INDIVIDUAL_TWEET,
  payload
});

export const getIndividualTweetsActionCreator = payload => dispatch => {
  dispatch(fetchActionType(payload));
  axios
    .get(`http://13.232.242.50:33138/tweets/${payload.tweetid}`)
    .then(res => {
      dispatch(responseActionType(res.data));
    })
    .catch(error => {
      dispatch(errorActionType(error.message));
    });
};
