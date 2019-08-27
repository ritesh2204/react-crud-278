export const FETCH_USER = "FETCH_USER";
export const RESPONSE_USER = "RESPONSE_USER";
export const ERROR_USER = "ERROR_USER";

export const fetchUserActionType = payload => ({ type: FETCH_USER, payload });

export const responseUserActionType = payload => ({
  type: RESPONSE_USER,
  payload
});

export const errorUserActionType = payload => ({ type: ERROR_USER, payload });
