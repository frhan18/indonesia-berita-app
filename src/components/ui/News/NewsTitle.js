import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../modules/News/news.module.css";

export default function NewsTitle({ title, link }) {
  return (
    <div className={styles.cardTitle}>
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
