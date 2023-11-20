import {
  GET_USERS_LIST,
  POST_USER_CREATE,
  GET_USER_BY_ID,
  UPDATE_USER,
} from "../actions/userAction";

let initialState = {
  getUserlist: false,
  getUserById: false,
  errorUserList: false,
  errorUserById: false,
  getResponDataUser: false,
  errorResponDataUser: false,
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        getUserById: action.payload.data,
        errorUserById: action.payload.errorMessage,
      };

    case POST_USER_CREATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
    
    case UPDATE_USER:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;