import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Helmet } from "react-helmet";
import { Col, Row } from "react-bootstrap";

// Include components:news
import NewsItem from "../components/ui/News/NewsItem";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import Loading from "../components/shared/Loading";
export default class NewsEkonomi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.receivedData();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  receivedData() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNN.EKONOMI}`)
      .then((response) => this.setState({ news: response.data.data }))
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
          defaultTitle="Indonesia Berita - Ekonomi"
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
            <div className="idn-items-list px-3">
              <ProgramSectionTitle title="BERITA EKONOMI" />
              <Row className="justify-content-arround">
                {this.state.news?.map((data, index) => (
                  <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                    <NewsItem news={data} author="CNN INDONESIA" />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </section>
      </div>
    );
  }
}
