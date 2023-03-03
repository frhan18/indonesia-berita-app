import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

// Include components:news
import NewsItem from "../components/ui/NewsItem";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import Loading from "../components/shared/Loading";
import Paginate from "../components/shared/Paginate";
export default class NewsHiburan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 12,
    };

    this.onPaginateChangeHandler = this.onPaginateChangeHandler.bind(this);
    this.onPaginateNextChangeHandler =
      this.onPaginateNextChangeHandler.bind(this);
    this.onPaginatePreviousChangeHandler =
      this.onPaginatePreviousChangeHandler.bind(this);
  }

  componentDidMount() {
    this.receivedData();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  async receivedData() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.HIBURAN}`, {
        url: `${process.env.REACT_APP_BASE_URL}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.data;
      // set state
      this.setState({ news: responseData.data });
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log({ errRequest: error.request });
      } else {
        console.log({ errMessage: error.response.message });
      }
    }
  }

  onPaginateChangeHandler(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  onPaginateNextChangeHandler() {
    if (
      this.state.currentPage !==
      Math.ceil(this.state.news.length / this.state.postsPerPage)
    ) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  onPaginatePreviousChangeHandler() {
    if (this.state.currentPage !== 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  }

  render() {
    const { news, currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <>
        <Helmet>
          <title>Indonesia Berita - Informasi berita hiburan</title>
          <meta
            property="og:description"
            content="Indeks berita hiburan  terbaru hari ini dari peristiwa, kecelakaan, kriminal, hukum, berita unik, Politik, dan liputan khusus di Indonesia dan Internasional"
          />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="indonews.netlify.app" />
          <meta property="og:url" content="https://indonews.netlify.app/" />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <>
          {this.state.loading ? (
            <Loading />
          ) : (
            <div className="idn-items-list px-md-3 mx-md-3 p-3 py-5">
              <ProgramSectionTitle title="BERITA HIBURAN" />
              <Row className="justify-content-arround">
                {currentPosts?.map((data, index) => (
                  <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                    <NewsItem news={data} author="CNN INDONESIA" />
                  </Col>
                ))}
              </Row>
              <Paginate
                postPerPage={postsPerPage}
                totalPost={news.length}
                paginate={this.onPaginateChangeHandler}
                previousPage={this.onPaginatePreviousChangeHandler}
                nextPage={this.onPaginateNextChangeHandler}
              />
            </div>
          )}
        </>
      </>
    );
  }
}
