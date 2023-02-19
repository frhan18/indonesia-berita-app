import React from "react";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" variant="white" fixed="top">
      <div className="container-fluid">
        <Navbar.Brand href="/">INDO NEWS</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="rounded"
        ></Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-start"
        >
          <Nav className="">
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
            <Link to="/investasi" className="mx-md-2 nav-link">
              Investasi
            </Link>
            <Link to="/bisnis" className="mx-md-2 nav-link">
              Bisnis
            </Link>
            <Link to="/ekonomi" className="mx-md-2 nav-link">
              Ekonomi
            </Link>
            <Link to="/olahraga" className="mx-md-2 nav-link">
              Olahraga
            </Link>

            <NavDropdown
              title="Lainnya"
              className="mx-md-2"
              id="basic-nav-dropdown"
            >
              <Link to="/hiburan" className="dropdown-item">
                Hiburan
              </Link>

              <Link to="/gaya-hidup" className="dropdown-item">
                Gaya Hidup
              </Link>

              <Link to="/syariah" className="dropdown-item">
                Syariah
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
