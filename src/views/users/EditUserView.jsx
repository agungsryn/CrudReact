/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../../actions/userAction";
import { Container } from "react-bootstrap";
import BackComponent from "../../components/BackComponent";
import FormComponent from "../../components/FormComponent";
import Swal from "sweetalert2";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

const EditUserView = (props) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getUserById(id));
  });

  const handleSubmit = (data) => {
    console.log("halo halo update", data);
    // eslint-disable-next-line react/prop-types
    props.dispatch(updateUser(data, id));
  };

  if (props.getResponDataUser || props.errorResponDataUser) {
    if (props.errorResponDataUser) {
      Swal.fire({
        title: "Failed!",
        text: props.errorResponDataUser,
        icon: "error",
        // confirmButtonText: 'Cool'
      });
    } else {
      Swal.fire({
        title: "User Created!",
        text:
          "Nama : " +
          props.getResponDataUser.nama +
          " , Umur : " +
          props.getResponDataUser.umur,
        icon: "success",
        // confirmButtonText: 'Cool'
      });
    }
  }

  return (
    <div>
      <Container>
        <BackComponent />
        <FormComponent onSubmit={(data) => handleSubmit(data)} />
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(EditUserView);
