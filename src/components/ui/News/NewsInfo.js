import React from "react";
import showFormattedDate from "../../FormatDate";

export default function NewsInfo({ infoAuthor, infoPublish }) {
  return (
    <div className="idc-item-info mb-3">
      {/* <div className="idc-item-info__author">
        <i className="fas fa-user"></i> {infoAuthor ? infoAuthor : "Author"}
      </div> */}
      <div className="idc-item-info__published">
        {showFormattedDate(infoPublish)}
      </div>
    </div>
  );
}
