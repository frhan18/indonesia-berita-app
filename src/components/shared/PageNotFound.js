import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="pagenotfound mb-5 py-5">
      <div className="pagenotfound-center text-center">
        <h1 className="text-center">404</h1>
        <h1 className="text-center">Halaman tidak ditemukan</h1>
        <p className="text-dark pt-2">Upppss halaman ini tidak tersedia....</p>
        <Link to="/" className="btn btn-dark btn-md rounded">
          Kembali ke menu utama
        </Link>
      </div>
    </div>
  );
}
