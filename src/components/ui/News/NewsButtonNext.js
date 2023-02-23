import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../modules/News/news.module.css";

export default function NewsButtonNext({ link, linkName }) {
  return (
    <div className={styles.cardButton}>
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
