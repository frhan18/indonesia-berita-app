import React from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" variant="white" fixed="top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          INDO NEWS
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="rounded"
        ></Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-start"
        >
          <Nav className="me-auto my-2 my-lg-0">
            <Link to="/" href="#home" className="mx-md-2 nav-link">
              Beranda
            </Link>
            <Link to="/terkini" className="mx-md-2 nav-link">
              Terkini
            </Link>

            <Link to="/dunia" className="mx-md-2 nav-link">
              Internasional
            </Link>
            <Link to="/indonesia" className="mx-md-2 nav-link">
              Nasional
            </Link>
            <Link to="/teknologi" className="mx-md-2 nav-link">
              Teknologi
            </Link>
            <Link to="/gaya-hidup" className="mx-md-2 nav-link">
              Kesehatan
            </Link>
            <Link to="/ekonomi" className="mx-md-2 nav-link">
              Ekonomi
            </Link>
            <NavDropdown
              title="Berita lainnya"
              className="mx-md-2"
              id="basic-nav-dropdown"
            >
              <Link to="/investasi" className="dropdown-item">
                Investasi
              </Link>
              <Link to="/bisnis" className="dropdown-item">
                Bisnis
              </Link>
              <Link to="/olahraga" className="dropdown-item">
                Olahraga
              </Link>
              <Link to="/hiburan" className="dropdown-item">
                Hiburan
              </Link>

              <Link to="/syariah" className="dropdown-item">
                Syariah
              </Link>
            </NavDropdown>
            {/* <Link
              to="/search"
              className="text-dark text-decoration-none my-2 my-lg-0"
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Cari berita..."
                  className="me-2 rounded-pill"
                  aria-label="Cari berita..."
                />
              </Form>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
