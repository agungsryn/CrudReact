import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default class BackComponent extends Component {
  render() {
    return (
        <Link to={"/users"}>
          <Button variant="dark" className="mr-2">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
    );
  }
}
