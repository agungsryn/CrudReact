/* eslint-disable react/prop-types */
import { Component } from "react";
import DataTableComponent from "../../components/DataTableComponent";
import { getUsers } from "../../actions/userAction";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import JumbotronComponent from "../../components/JumbotronComponent";

class DashboardUserView extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <Container>
        <JumbotronComponent title={"User Dashboard"} />
        <br />
        <DataTableComponent />
      </Container>
    );
  }
}

export default connect()(DashboardUserView);
