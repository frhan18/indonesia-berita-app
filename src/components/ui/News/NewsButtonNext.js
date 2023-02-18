import React from "react";
import { Link } from "react-router-dom";

export default function NewsButtonNext({ link, linkName }) {
  return (
    <div className="idc-item-button">
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-md btn-dark rounded "
      >
        {linkName}
      </Link>
    </div>
  );
}
