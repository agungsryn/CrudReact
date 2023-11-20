import { Form, Field } from "react-final-form";
import Styles from "../Styles";
import { connect } from "react-redux";
import { Component } from "react";
import Select from "react-select";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const mapStateToProps = (state) => {
  return {
    initialValues: {
      // nama: state.users.getUserById.nama,
      // nohp: state.users.getUserById.nohp,
      // alamat: state.users.getUserById.alamat,
      // umur: state.users.getUserById.umur,
    },
    getUsersList: state.users.getUsersList,
  };
};

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

class FormFormulirComponent extends Component {
  validate = (values) => {
    const errors = {};
    if (!values.description) {
      errors.description = "Nama harus diisi";
    }
    // if (!values.alamat) {
    //   errors.alamat = "Alamat harus diisi";
    // }
    // if (!values.umur) {
    //   errors.umur = "Umur harus diisi";
    // }
    // if (!values.nohp) {
    //   errors.nohp = "No HP harus diisi";
    // }

    return errors;
  };

  render() {
    // eslint-disable-next-line react/prop-types
    let options = this.props.getUsersList?.map((person) => ({
      value: person._id,
      label: person.nama,
    }));

    return (
      <Styles>
        <Form
          // eslint-disable-next-line react/prop-types
          onSubmit={this.props.onSubmit}
          validate={this.validate}
          // eslint-disable-next-line react/prop-types
          initialValues={this.props.initialValues || {}}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field name="user">
                {({ input, meta }) => (
                  <div>
                    <label>User name</label>
                    <Select
                      {...input}
                      options={options}
                      placeholder="Select User From Username"
                      className="react-select-container"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="description">
                {({ input, meta }) => (
                  <div>
                    <label>Description</label>
                    <input {...input} type="text" placeholder="description" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="validthru">
                {({ input, meta }) => (
                  <div>
                    <label>Valid Thru</label>
                    <input {...input} type="date" placeholder="Valid thru" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit">Submit</button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        />
      </Styles>
    );
  }
}

export default connect(mapStateToProps, null)(FormFormulirComponent);
