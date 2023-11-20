import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";

import { Component } from "react";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar expand="lg" className="bg-body-tertiary bg-color-primary">
          <Container>
            <Navbar.Brand href="/" className="text-light">Simple CRUD</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/users" className="text-white-50">Users</Nav.Link>
                <Nav.Link href="/formulir/create"  className="text-white-50">Formulir</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
