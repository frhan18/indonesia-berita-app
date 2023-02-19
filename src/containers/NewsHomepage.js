import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Include components:news
import NewsItem from "../components/ui/News/NewsItem";
import { Link } from "react-router-dom";
import Loading from "../components/shared/Loading";

export default class NewsHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tecnology: [],
      lifestyle: [],
      mostViewed: [],
      hiburan: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getTeknologiLoadApi();
    this.getLifestyleLoadApi();
    this.getMostViewedLoadApi();
    this.getHiburanLoadApi();

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  getMostViewedLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNBC.NEWS}`)
      .then((response) => this.setState({ mostViewed: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }

  getTeknologiLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNBC.TECH}`)
      .then((response) => this.setState({ tecnology: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }

  getLifestyleLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNBC.LIFESTYLE}`)
      .then((response) => this.setState({ lifestyle: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }

  getHiburanLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNN.HIBURAN}`)
      .then((response) => this.setState({ hiburan: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }

  render() {
    return (
      <div className="application">
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle="Indonesia Berita - Beranda"
          titleTemplate="Indonesia Berita"
        >
          {/* multiple meta elements */}
          <meta
            name="description"
            content="Temukan semua berita lengkap dan terupdate hanya di indonesia berita"
          />
          <meta property="og:type" content="article" />
        </Helmet>
        <section className="idn-container">
          {this.state.loading ? (
            <Loading />
          ) : (
            <>
              <div className="mb-3 px-3">
                <div className="idn-heading-name">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark"> BERITA TERKINI</h2>
                    <Link
                      to="/terkini"
                      className="text-dark text-decoration-none"
                    >
                      Lihat semua <i className="fas fa-arrow-right"></i>
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
                    {this.state.mostViewed?.slice(0, 9).map((data, index) => (
                      <SwiperSlide key={index}>
                        <NewsItem news={data} author="CBNC INDONESIA" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="mb-3 px-3">
                <div className="idn-heading-name mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark"> GAYA HIDUP</h2>
                    <Link
                      to="/gaya-hidup"
                      className="text-dark text-decoration-none"
                    >
                      Lihat semua <i className="fas fa-arrow-right"></i>
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
                    {this.state.lifestyle?.slice(0, 9).map((data, index) => (
                      <SwiperSlide key={index}>
                        <NewsItem news={data} author="CBNC INDONESIA" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="mb-3 px-3">
                <div className="idn-heading-name mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark"> HIBURAN</h2>
                    <Link
                      to="/hiburan"
                      className="text-dark text-decoration-none"
                    >
                      Lihat semua <i className="fas fa-arrow-right"></i>
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
                    {this.state.hiburan?.slice(0, 9).map((data, index) => (
                      <SwiperSlide key={index}>
                        <NewsItem news={data} author="CNN INDONESIA" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="mb-3 px-3">
                <div className="idn-heading-name mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-dark"> TEKNOLOGI</h2>
                    <Link
                      to="/teknologi"
                      className="text-dark text-decoration-none"
                    >
                      Lihat semua <i className="fas fa-arrow-right"></i>
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
                    {this.state.tecnology?.slice(0, 9).map((data, index) => (
                      <SwiperSlide key={index}>
                        <NewsItem news={data} author="CBNC INDONESIA" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    );
  }
}
