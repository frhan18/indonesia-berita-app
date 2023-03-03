/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchNews from "../ui/SearchNews";

export default function HeaderNav() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <div className="container">
      <header className="blog-header lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="link-secondary text-decoration-none" href="#">
              <i className="fab fa-instagram" style={{ fontSize: 24 }}></i>
            </a>
            <a className="link-secondary text-decoration-none ms-2" href="#">
              <i className="fab fa-facebook" style={{ fontSize: 24 }}></i>
            </a>
            <a className="link-secondary text-decoration-none ms-2" href="#">
              <i className="fab fa-linkedin" style={{ fontSize: 24 }}></i>
            </a>
          </div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark" to="/">
              INDONESIA BERITA
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <input
              className="form-control me-2 d-none d-md-none d-lg-block w-75 rounded-pill"
              type="search"
              readOnly
              placeholder="Mau cari berita apa?"
              aria-label="Mau cari berita apa?"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
            <a
              className="link-secondary d-block d-md-none"
              href="#"
              aria-label="Mau cari berita apa?"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between sticky-top">
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/" ? "fw-bold text-decoration-underline" : "")
            }
            to="/"
          >
            Beranda
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/terbaru" ? "fw-bold text-decoration-underline" : "")
            }
            to="/terbaru"
          >
            Terbaru
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/teknologi" ? "fw-bold text-decoration-underline" : "")
            }
            to="/teknologi"
          >
            Teknologi
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/dunia" ? "fw-bold text-decoration-underline" : "")
            }
            to="/dunia"
          >
            Dunia
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/indonesia" ? "fw-bold text-decoration-underline" : "")
            }
            to="/indonesia"
          >
            Dalam Negeri
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/ekonomi" ? "fw-bold text-decoration-underline" : "")
            }
            to="/ekonomi"
          >
            Ekonomi
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/bisnis" ? "fw-bold text-decoration-underline" : "")
            }
            to="/bisnis"
          >
            Bisnis
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/syariah" ? "fw-bold text-decoration-underline" : "")
            }
            to="/syariah"
          >
            Syariah
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/investasi" ? "fw-bold text-decoration-underline" : "")
            }
            to="/investasi"
          >
            Investasi
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/olahraga" ? "fw-bold text-decoration-underline" : "")
            }
            to="/olahraga"
          >
            Olahraga
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/kesehatan" ? "fw-bold text-decoration-underline" : "")
            }
            to="/gaya-hidup"
          >
            Kesehatan
          </Link>
          <Link
            className={
              "p-2 link-secondary text-decoration-none" +
              (url === "/hiburan" ? "fw-bold text-decoration-underline" : "")
            }
            to="/hiburan"
          >
            Hiburan
          </Link>
        </nav>
      </div>

      <div
        className="modal fade "
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        id="exampleModal"
        // eslint-disable-next-line react/jsx-no-duplicate-props
      >
        <div className="modal-dialog  modal-xl modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SearchNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
