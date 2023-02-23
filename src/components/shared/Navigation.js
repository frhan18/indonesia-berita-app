import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <Navbar expand="lg" variant="white" fixed="top">
      <div className="container-fluid">
        <Link className="navbar-brand ms-md-3" to="/">
          INDO NEWS
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="rounded"
        ></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto my-2 my-lg-0">
            <Link to="/" href="#home" className="mx-md-2 mx-lg-1 nav-link">
              Beranda
            </Link>
            <Link to="/terkini" className="mx-md-2 mx-lg-1 nav-link">
              Terbaru
            </Link>
            <Link to="/dunia" className="mx-md-2 mx-lg-1 nav-link">
              Internasional
            </Link>
            <Link to="/indonesia" className="mx-md-2 mx-lg-1 nav-link">
              Nasional
            </Link>
            <Link to="/teknologi" className="mx-md-2 mx-lg-1 nav-link">
              Teknologi
            </Link>
            <Link to="/investasi" className="mx-md-2 mx-lg-1 nav-link">
              Investasi
            </Link>
            <Link to="/ekonomi" className="mx-md-2 mx-lg-1 nav-link">
              Ekonomi
            </Link>
            <NavDropdown
              title="Lainnya"
              className="mx-md-1"
              id="basic-nav-dropdown"
            >
              <Link to="/gaya-hidup" className="dropdown-item">
                Kesehatan
              </Link>
              <Link to="/olahraga" className="dropdown-item">
                Olahraga
              </Link>

              <Link to="/bisnis" className="dropdown-item">
                Bisnis
              </Link>

              <Link to="/hiburan" className="dropdown-item">
                Hiburan
              </Link>

              <Link to="/syariah" className="dropdown-item">
                Syariah
              </Link>
            </NavDropdown>
            <Link to="/search" className="mx-md-2 mx-lg-1 nav-link">
              <i className="fas fa-search"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
