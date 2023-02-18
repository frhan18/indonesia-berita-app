import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../../../config/api-endpoint";
import { Col, Container, Row, ListGroup, Card } from "react-bootstrap";

// Include components:news
import NewsItem from "../../../components/ui/News/NewsItem";
import ProgramSectionTitle from "../../../components/ui/Program/ProgramSectionTitle";
import { Link } from "react-router-dom";

export default class CnbcNewsTech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNBC.TECH}`)
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
      <section className="idn-container">
        <Container>
          <div className="idn-items-list">
            <Link
              to="/cnbc-news"
              className="text-dark text-decoration-none mb-2"
            >
              <i className="fas fa-arrow-left"></i> Kembali
            </Link>
            <ProgramSectionTitle title="CNBC INDONESIA -  BERITA TECH" />
            <Row className="justify-content-arround">
              {this.state.news?.map((data, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <NewsItem news={data} author="CNN INDONESIA" />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
