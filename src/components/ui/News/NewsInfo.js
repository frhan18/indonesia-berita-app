import React from "react";
import showFormattedDate from "../../FormatDate";
import styles from "../../../modules/News/news.module.css";
export default function NewsInfo({ infoAuthor, infoPublish }) {
  return (
    <div className={styles.cardInfo}>
      {/* <div className="idc-item-info__author">
        <i className="fas fa-user"></i> {infoAuthor ? infoAuthor : "Author"}
      </div> */}
      <div className="idc-item-info__published">
        {showFormattedDate(infoPublish)}
      </div>
    </div>
  );
}
