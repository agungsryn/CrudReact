/* eslint-disable react/prop-types */
import { Component } from "react";
export default class JumbotronComponent extends Component {
  render() {
    return (
      <>
        <br />
        <div className="container-fluid text-dark p-5 radius bg-color-secondary">
          <div className="container p-5">
            <h1 className="display-4 fw-bold text-white">Welcome to {this.props.title}</h1>
            <p className=" text-white-50">Go to My Website</p>
          </div>
        </div>
      </>
    );
  }
}
