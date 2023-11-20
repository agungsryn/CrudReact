/* eslint-disable react/prop-types */
import { Component } from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../../components/FormComponent";
import { createUser } from "../../actions/userAction";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import BackComponent from "../../components/BackComponent";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateUserView extends Component {
  handleSubmit(data) {
    this.props.dispatch(createUser(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        Swal.fire({
          title: "Failed!",
          text: this.props.errorResponDataUser,
          icon: "error",
          // confirmButtonText: 'Cool'
        });
      } else {
        Swal.fire({
          title: "User Created!",
          text:
            "Nama : " +
            this.props.getResponDataUser.nama +
            " , Umur : " +
            this.props.getResponDataUser.umur,
          icon: "success",
          // confirmButtonText: 'Cool'
        });
      }
    }

    return (
      <>
        <Container>
          <BackComponent />
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserView);
