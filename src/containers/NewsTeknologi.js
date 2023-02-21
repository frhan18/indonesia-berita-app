import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
// Include components:news
import NewsItem from "../components/ui/News/NewsItem";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import Loading from "../components/shared/Loading";

export default class NewsTeknologi extends Component {
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
      .get(`${API_ENDPOINT.NEWS.TECH}`)
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
      <>
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle="Berita Teknologi"
          titleTemplate="Indonesia Berita"
        ></Helmet>
        <>
          {this.state.loading ? (
            <Loading />
          ) : (
            <div className="idn-items-list px-3">
              <ProgramSectionTitle title="BERITA TEKNOLOGI" />
              <Row className="justify-content-arround">
                {this.state.news?.map((data, index) => (
                  <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                    <NewsItem news={data} author="CBNC INDONESIA" />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </>
      </>
    );
  }
}
