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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto my-2 my-lg-0">
            <Link to="/" href="#home" className=" mx-md-2 nav-link">
              Beranda
            </Link>
            <Link to="/berita" className=" mx-md-2 nav-link">
              Semua berita
            </Link>
            <Link to="/terkini" className=" mx-md-2 nav-link">
              Terkini
            </Link>

            <Link to="/dunia" className=" mx-md-2 nav-link">
              Internasional
            </Link>
            <Link to="/indonesia" className=" mx-md-2 nav-link">
              Nasional
            </Link>

            <NavDropdown
              title="Berita lainnya"
              className="mx-md-1"
              id="basic-nav-dropdown"
            >
              <Link to="/teknologi" className="dropdown-item">
                Teknologi
              </Link>
              <Link to="/gaya-hidup" className="dropdown-item">
                Kesehatan
              </Link>
              <Link to="/olahraga" className="dropdown-item">
                Olahraga
              </Link>
              <Link to="/ekonomi" className="dropdown-item">
                Ekonomi
              </Link>
              <Link to="/bisnis" className="dropdown-item">
                Bisnis
              </Link>
              <Link to="/investasi" className="dropdown-item">
                Investasi
              </Link>
              <Link to="/hiburan" className="dropdown-item">
                Hiburan
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
