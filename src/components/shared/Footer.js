import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="justify-content-arround">
          <Col md={6}>
            <div>
              <h2 className="text-white mb-3">TENTANG</h2>
            </div>
            <div className="mb-3">
              <p className="text-white text-start">
                Indonews adalah website yang bertujuan untuk menampilkan daftar
                berita Internasional dan Nasional.
              </p>
            </div>
            <div>
              <p>
                Powered by{" "}
                <a
                  href="https://github.com/farizdotid/DAFTAR-API-LOKAL-INDONESIA"
                  className="text-white text-decoration-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  API LOKAL INDONESIA
                </a>
                &{" "}
                <a
                  href="https://github.com/satyawikananda/berita-indo-api"
                  className="text-white text-decoration-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  BERITA INDONESIA
                </a>
              </p>
              <p>
                © {date.getFullYear()} Created by{" "}
                <a
                  href="https://farhann.netlify.app/"
                  className="text-white text-decoration-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Farhan
                </a>{" "}
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h3 className="text-white mb-3">NAVIGASI</h3>
            </div>
            <div className="d-flex flex-column">
              <Link to="/" className=" text-white text-decoration-none mb-1">
                Beranda
              </Link>
              <Link
                to="/terkini"
                className=" text-white text-decoration-none mb-1"
              >
                Terkini
              </Link>
              <Link
                to="/teknologi"
                className=" text-white text-decoration-none mb-1"
              >
                Teknologi
              </Link>
              <Link
                to="indonesia"
                className=" text-white text-decoration-none mb-1"
              >
                Nasional
              </Link>
              <Link
                to="/dunia"
                className=" text-white text-decoration-none mb-1"
              >
                Internasional
              </Link>
              <Link
                to="/investasi"
                className=" text-white text-decoration-none mb-1"
              >
                Investasi
              </Link>
              <Link
                to="/bisnis"
                className=" text-white text-decoration-none mb-1"
              >
                Bisnis
              </Link>
              <Link
                to="/ekonomi"
                className=" text-white text-decoration-none mb-1"
              >
                Ekonomi
              </Link>
              <Link
                to="/olahraga"
                className=" text-white text-decoration-none mb-1"
              >
                Olahraga
              </Link>
              <Link
                to="/hiburan"
                className=" text-white text-decoration-none mb-1"
              >
                Hiburan
              </Link>
              <Link
                to="/gaya-hidup"
                className=" text-white text-decoration-none mb-1"
              >
                Gaya Hidup
              </Link>
              <Link
                to="/syariah"
                className=" text-white text-decoration-none mb-1"
              >
                Syariah
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
