import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    <>
      <Navbar className="bg-warning" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="img-fluid logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/catalogo">Catalogo</Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={`/category/${"Vacunas"}`}>Vacunas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/${"Desparasitantes"}`}>Desparasitantes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/category/${"Alimentos"}`}>Alimentos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart">
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
    </>
  );
};

export default NavBar;
