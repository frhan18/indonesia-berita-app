import React from "react";
import { Link } from "react-router-dom";

export default function NewsTitle({ title, link }) {
  return (
    <div className="idc-item-name">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark text-decoration-none"
      >
        {title}
      </Link>
    </div>
  );
}
