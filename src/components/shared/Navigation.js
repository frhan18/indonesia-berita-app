import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" variant="white" fixed="top">
      <Container>
        <Navbar.Brand href="/">INDO NEWS</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="rounded"
        ></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Link to="/" href="#home" className="mx-md-2 nav-link">
              Beranda
            </Link>
            <Link to="/terkini" className="mx-md-2 nav-link">
              Terkini
            </Link>
            <Link to="/teknologi" className="mx-md-2 nav-link">
              Teknologi
            </Link>
            <Link to="/dunia" className="mx-md-2 nav-link">
              Internasional
            </Link>
            <Link to="/indonesia" className="mx-md-2 nav-link">
              Nasional
            </Link>

            <NavDropdown title="Lainnya" id="basic-nav-dropdown">
              <Link to="/olahraga" className="dropdown-item">
                Olahraga
              </Link>
              <Link to="/hiburan" className="dropdown-item">
                Hiburan
              </Link>
              <Link to="/ekonomi" className="dropdown-item">
                Ekonomi
              </Link>
              <Link to="/gaya-hidup" className="dropdown-item">
                Gaya Hidup
              </Link>
              <Link to="/investasi" className="dropdown-item">
                Investasi
              </Link>
              <Link to="/bisnis" className="dropdown-item">
                Bisnis
              </Link>
              <Link to="/syariah" className="dropdown-item">
                Syariah
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
