import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
// const getHeader = () => {
//   let config = {
//     headers: {
//       "Cache-Control": "no-cache",
//       "Accept-Language" : "en",
//       "Content-Type" : "application/json",
//       "Access-Control-Allow-Origin" : "*",

//     }
//   }
//   return config
// }

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/getUsers")
      .then(function (response) {
        console.log("getUsers run ", response);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserById = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/api/getUserById/" + id)
      .then(function (response) {
        console.log("isinya ", response);
        dispatch({
          type: GET_USER_BY_ID,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_BY_ID,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateUser = (data, id) => {
  return (dispatch) => {
    axios
      .put("http://localhost:8000/api/updateUser/" + id, data)
      .then(function (response) {
        console.log("isinya ", response);
        dispatch({
          type: UPDATE_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: UPDATE_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const createUser = (data) => {
  console.log("halo halo ", data);
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/createUser", data)
      .then(function (response) {
        console.log("response.data ", response);

        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log("isi error ", error.message);
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:8000/api/deleteUser/" + id)
      .then(function (response) {
        console.log("isinya ", response);
        dispatch({
          type: DELETE_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: DELETE_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};