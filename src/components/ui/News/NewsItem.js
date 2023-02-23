import React from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
// Include components:news
import NewsTitle from "./NewsTitle";
import NewsInfo from "./NewsInfo";
import NewsDescriptionText from "./NewsDescriptionText";
import styles from "../../../modules/News/news.module.css";

export default function NewsItem({ news, author }) {
  return (
    <Card className={styles.card}>
      <LazyLoadImage
        className={styles.cardImage}
        src={news.image.large}
        alt={news.title}
      />

      <Card.Body>
        <NewsInfo infoAuthor={author} infoPublish={news.isoDate} />
        <NewsTitle title={news.title} link={news.link} />
        <NewsDescriptionText description={news.contentSnippet} />
      </Card.Body>
    </Card>
  );
}
