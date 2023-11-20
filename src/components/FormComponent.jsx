import { Form, Field } from "react-final-form";
import Styles from "../Styles";
import { connect } from "react-redux";
import { Component } from "react";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      nama: state.users.getUserById.nama,
      nohp: state.users.getUserById.nohp,
      alamat: state.users.getUserById.alamat,
      umur: state.users.getUserById.umur,
    },
  };
};

class FormComponent extends Component {
  validate = (values) => {
    const errors = {};
    if (!values.nama) {
      errors.nama = "Nama harus diisi";
    }
    if (!values.alamat) {
      errors.alamat = "Alamat harus diisi";
    }
    if (!values.umur) {
      errors.umur = "Umur harus diisi";
    }
    if (!values.nohp) {
      errors.nohp = "No HP harus diisi";
    }

    return errors;
  };

  render() {
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
              <Field name="nama">
                {({ input, meta }) => (
                  <div>
                    <label>Nama</label>
                    <input {...input} type="text" placeholder="Nama" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="alamat">
                {({ input, meta }) => (
                  <div>
                    <label>Alamat</label>
                    <input {...input} type="text" placeholder="Alamat" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="umur">
                {({ input, meta }) => (
                  <div>
                    <label>Umur</label>
                    <input {...input} type="text" placeholder="Umur" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="nohp">
                {({ input, meta }) => (
                  <div>
                    <label>No Hp</label>
                    <input {...input} type="number" placeholder="nohp" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
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

export default connect(mapStateToProps, null)(FormComponent);
