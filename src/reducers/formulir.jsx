import { FORMULIR_CREATE } from "../actions/formulirAction";

  let initialState = {
    // getUserlist: false,
    // getUserById: false,
    // errorUserList: false,
    // errorUserById: false,
    getResponDataFormulir: false,
    errorResponDataFormulir: false,
  };
  const users = (state = initialState, action) => {
    switch (action.type) {
    //   case GET_USERS_LIST:
    //     return {
    //       ...state,
    //       getUsersList: action.payload.data,
    //       errorUsersList: action.payload.errorMessage,
    //     };
  
    //   case GET_USER_BY_ID:
    //     return {
    //       ...state,
    //       getUserById: action.payload.data,
    //       errorUserById: action.payload.errorMessage,
    //     };
  
      case FORMULIR_CREATE:
        return {
          ...state,
          getResponDataFormulir: action.payload.data,
          errorResponDataFormulir: action.payload.errorMessage,
        };
      
    //   case UPDATE_USER:
    //     return {
    //       ...state,
    //       getResponDataUser: action.payload.data,
    //       errorResponDataUser: action.payload.errorMessage,
    //     };
  
      default:
        return state;
    }
  };
  
  export default users;