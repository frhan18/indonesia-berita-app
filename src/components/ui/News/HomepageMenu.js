import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

// Include components:news
import NewsItem from "./NewsItem";

export default function HomepageMenu({
  headingTitle,
  headingLink,
  headingLinkName,
  items,
  infoAuthor,
}) {
  return (
    <div className="mb-3 px-3">
      <div className="idn-heading-name">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-dark ">{headingTitle}</h2>
          <Link to={headingLink} className="text-dark text-decoration-none">
            {headingLinkName} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="idn-items-list">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination, Navigation, Autoplay]}
          grabCursor={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {items?.slice(0, 9).map((item, index) => (
            <SwiperSlide key={index}>
              <NewsItem news={item} author={infoAuthor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
