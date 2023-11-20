/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Container } from 'react-bootstrap';
import JumbotronComponent from '../components/JumbotronComponent';

export default class HomeView extends Component {
    // componentDidMount() {
    //     this.props.dispatch(getUsers());
    //   }

    render() {
    return (
      <Container>
        <JumbotronComponent title={"Simple Crud Vite App"} />
        {/* <DataTableComponent /> */}
      </Container>
    )
  }
}