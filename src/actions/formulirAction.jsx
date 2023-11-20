import axios from "axios";

export const FORMULIR_CREATE = "FORMULIR_CREATE";

export const createFormulir = (data) => {
  //  data = {
  //   "userId" : data.user.value,
  //   "description" : data.description,
  //   "validThru" : data.validthru,
  // }
  // console.log("halo halo == ", data);
  // // create a date variable
  // const date1 = Date.parse(data.validthru);
  // console.log("asdsds", date1); // print the date

  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/createFormulir", {
        description: data.description,
        userId: data.user.value,
        validThru: data.validthru,
      })
      .then(function (response) {
        console.log("response.data ", response);

        dispatch({
          type: FORMULIR_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        console.log("isi error ", error.message);
        dispatch({
          type: FORMULIR_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
