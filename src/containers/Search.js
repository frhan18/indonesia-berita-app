import React from "react";
import { Helmet } from "react-helmet";
import SearchNews from "../components/ui/SearchNews";

export default function Search() {
  return (
    <>
      <Helmet
        encodeSpecialCharacters={true}
        defaultTitle="Mau cari berita apa?"
        titleTemplate="Indonesia Berita"
      ></Helmet>

      <div className="px-3">
        <SearchNews />
      </div>
    </>
  );
}
