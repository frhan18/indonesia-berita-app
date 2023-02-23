import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import API_ENDPOINT from "../../config/api-endpoint";

export default function Footer() {
  const date = new Date();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT.NEWS.ALL}`)
      .then((response) => setItems(response.data.data))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }, []);

  return (
    <footer className="footer-section">
      <Container>
        <Row className="justify-content-arround ">
          <Col lg={4} md={6} sm="12">
            <div>
              <h2 className="text-white mb-3">TENTANG</h2>
            </div>
            <div className="mb-3">
              <p className="text-white text-start">
                Indonews adalah website yang bertujuan untuk menampilkan daftar
                berita Internasional dan Nasional.
              </p>
            </div>
            <div className="mb-3">
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
          <Col lg={2} md="auto" sm="12">
            <div>
              <h3 className="text-white mb-3">NAVIGASI</h3>
            </div>
            <div className="d-flex flex-column mb-3">
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
          <Col lg={6} md="auto" sm="12">
            <div>
              <h3 className="text-white mb-3">UPDATE BERITA HARI INI</h3>
            </div>
            <div className="d-flex flex-column">
              <ul>
                {items
                  ?.slice(0, 10)
                  .filter((filtered) => filtered.isoDate && filtered.title)
                  .sort()
                  .map((item, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-white text-decoration-none "
                        rel="noreferrer"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
