import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Col, Container, Row } from "react-bootstrap";

// Include components:news
import NewsItem from "../components/ui/News/NewsItem";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";

export default class NewsSyariah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNBC.SYARIAH}`)
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
            <ProgramSectionTitle title="CBNC INDONESIA -  BERITA SYARIAH" />
            <Row className="justify-content-arround">
              {this.state.news?.map((data, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <NewsItem news={data} author="CBNC INDONESIA" />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
