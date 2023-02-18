import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../../../config/api-endpoint";
import { Col, Container, Row, ListGroup, Card } from "react-bootstrap";

// Include components:news
import NewsItem from "../../../components/ui/News/NewsItem";
import ProgramSectionTitle from "../../../components/ui/Program/ProgramSectionTitle";
import { Link } from "react-router-dom";

export default class CnbcNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNBC.ALL}`)
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
          <ProgramSectionTitle title="KUMPULAN BERITA DARI CNBC INDONESIA" />
          <Row className="justify-content-arround mb-3">
            <Col lg={4} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title className=" ms-3 text-start">KATEGORI</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/market"
                        className="text-dark text-decoration-none"
                      >
                        Market
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/investment"
                        className="text-dark text-decoration-none"
                      >
                        Investment
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/news"
                        className="text-dark text-decoration-none"
                      >
                        News
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/enterprenuer"
                        className="text-dark text-decoration-none"
                      >
                        Entrepreneur
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/syariah"
                        className="text-dark text-decoration-none"
                      >
                        Syariah
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/tech"
                        className="text-dark text-decoration-none"
                      >
                        Tech
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnbc-news/lifestyle"
                        className="text-dark text-decoration-none"
                      >
                        Lifestyle
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card>
                <Card.Body>
                  <div className="mb-3">
                    CNBC Indonesia merupakan media massa online yang terafiliasi
                    dengan CNBC Internasional. CNBC Indonesia merupakan bagian
                    dari detiknetwork di bawah Grup Transmedia.
                  </div>

                  <div>
                    <Link className="btn btn-md btn-dark rounded">
                      Kunjungi Situs
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr />
          <div className="idn-items-list">
            <ProgramSectionTitle title="SEMUA DAFTAR BERITA" />
            <Row className="justify-content-arround">
              {this.state.news?.map((data, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <NewsItem news={data} author="CNBC INDONESIA" />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
