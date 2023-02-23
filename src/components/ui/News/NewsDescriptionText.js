import React from "react";
import styles from "../../../modules/News/news.module.css";
export default function NewsDescriptionText({ description }) {
  return (
    <div className={styles.cardDesc}>
      <div className="text-start">{description}</div>
    </div>
  );
}
