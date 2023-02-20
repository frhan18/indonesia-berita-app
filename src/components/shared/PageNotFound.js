import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function PageNotFound() {
  return (
    <div className="pagenotfound mb-5 py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Halaman Tidak Ditemukan</title>
      </Helmet>
      <div className="pagenotfound-center text-center">
        <h1 className="text-center">404</h1>
        <h1 className="text-center mb-3">Halaman tidak ditemukan</h1>

        <Link to="/" className="btn btn-dark btn-md rounded">
          <i className="fas fa-home"></i> Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
}
