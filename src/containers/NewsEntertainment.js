import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Col, Container, Row } from "react-bootstrap";

// Include components:news
import NewsItem from "../components/ui/News/NewsItem";

export default class NewsEntertainment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entertainment: [],
    };
  }

  componentDidMount() {
    this.newsEntertainmentLoadApi.bind = this.newsEntertainmentLoadApi(this);
  }

  newsEntertainmentLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.ENTERTAINMENT}`)
      .then((response) =>
        this.setState({ entertainment: response.data.articles })
      )
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
          <div className="idn-heading-name">
            <h2 className="text-dark">ENTERTAINMENT</h2>
          </div>
          <div className="idn-items-list">
            <Row className="justify-content-arround">
              {this.state.entertainment?.map((data, index) => (
                <Col md={4} key={index}>
                  <NewsItem news={data} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
