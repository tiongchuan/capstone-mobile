import { 
  SET_EMAIL, 
  SET_PASSWORD, 
  SET_USERNAME, 
  SET_USER_ID, 
  SET_IMAGE,
  GET_IMAGE
} from "./actions";

const initialState = {
  email: "",
  password: "",
  username: "",
  userId: "",
  image: "",
  getImage: "",
  studentName: ""
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
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case GET_IMAGE:
      return {
        ...state,
        getImage: action.payload,
      };
    default:
      return state;
  }
}