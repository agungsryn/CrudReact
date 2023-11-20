/* eslint-disable react/prop-types */
import { Component } from "react";
import { Container } from "react-bootstrap";
import { getUsers } from "../../actions/userAction";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import BackComponent from "../../components/BackComponent";
import FormFormulirComponent from "../../components/FormFormulirComponent";
import { createFormulir } from "../../actions/formulirAction";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class CreateFormulirView extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  handleSubmit(data) {
    this.props.dispatch(createFormulir(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        Swal.fire({
          title: "Failed!",
          text: this.props.errorResponDataUser,
          icon: "error",
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
        });
      }
    }

    return (
      <>
        <Container>
          <BackComponent />
          <FormFormulirComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(CreateFormulirView);
