import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import showFormattedDate from "../FormatDate";
import styles from "../../styles/news.module.css";

export const NewsInfoAuthor = ({ infoAuthor, infoPublish }) => {
  return (
    <div className={styles.newsInfoAuthor}>
      {/* <div className="idc-item-info__author">
        <i className="fas fa-user"></i> {infoAuthor ? infoAuthor : "Author"}
      </div> */}
      <div className={styles.newsInfoAuthor}>
        {showFormattedDate(infoPublish)}
      </div>
    </div>
  );
};

export const NewsDescription = ({ description }) => {
  return (
    <div className={styles.newsDescriptionText}>
      <div className="text-start">{description}</div>
    </div>
  );
};

export const NewsTitle = ({ title, link }) => {
  return (
    <div className={styles.newsTitleName}>
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
};

export default function NewsItem({ news, author }) {
  return (
    <Card className={styles.cardStyledNews}>
      <LazyLoadImage
        className={styles.newsImageThumbnail}
        src={news.image.large}
        alt={news.title}
      />
      <Card.Body>
        <div className={styles.newsInfo}>
          <NewsInfoAuthor infoAuthor={author} infoPublish={news.isoDate} />
        </div>
        <div className={styles.newsTitle}>
          <NewsTitle title={news.title} link={news.link} />
        </div>
        <div className={styles.newsDescription}>
          <NewsDescription description={news.contentSnippet} />
        </div>
      </Card.Body>
    </Card>
  );
}
