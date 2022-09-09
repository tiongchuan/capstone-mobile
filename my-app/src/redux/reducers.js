import { 
  SET_EMAIL, 
  SET_PASSWORD, 
  SET_USERNAME, 
  SET_USER_ID, 
  SET_TUTOR_ID,
  SET_IMAGE
} from "./actions";

const initialState = {
  email: "",
  password: "",
  username: "",
  userId: "",
  tutorId: "",
  image: "",
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case SET_TUTOR_ID:
      return {
        ...state,
        tutorId: action.payload,
      };
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
}