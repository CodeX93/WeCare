import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function BasicExample() {
  return (
    <>
      <div data-testid="comp" className="Navbar">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              Bakery
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" textAlign="right">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/order">
                  Order
                </Nav.Link>
                <Nav.Link as={Link} to="/ingredient">
                  Ingredients
                </Nav.Link>

                <Nav.Link as={Link} to="/inventory">
                  InventoryReport
                </Nav.Link>

                <Nav.Link as={Link} to="/">
                  <Button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    LogOut
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
