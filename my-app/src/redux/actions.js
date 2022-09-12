export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_TUTOR_ID = 'SET_TUTOR_ID';
export const SET_IMAGE = 'SET_IMAGE';
export const GET_IMAGE = 'GET_IMAGE';

export const setEmail = email => dispatch => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
}

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_PASSWORD,
    payload: password,
  });
}

export const setUsername = username => dispatch => {
  dispatch({
    type: SET_USERNAME,
    payload: username,
  });
}

export const setUserId = userId => dispatch => {
  dispatch({
    type: SET_USER_ID,
    payload: userId,
  });
}

export const setTutorId = tutorId => dispatch => {
  dispatch({
    type: SET_TUTOR_ID,
    payload: tutorId,
  });
}

export const setImage = image => dispatch => {
  dispatch({
    type: SET_IMAGE,
    payload: image,
  });
}

export const setGetImage = getImage => dispatch => {
  dispatch({
    type: GET_IMAGE,
    payload: getImage,
  });
}