import React, { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    const elem = document.querySelector(".loader");
    window.onload = () => {
      setTimeout(() => {
        elem.style.opacity = "0";
        setTimeout(() => {
          elem.style.display = "none";
        }, 300);
      }, 2500);
    };
  }, []);

  return (
    <div className="loader">
      {/* <div className="ring"></div> */}
      <div className="loading">Sedang memuat...</div>
    </div>
  );
}
