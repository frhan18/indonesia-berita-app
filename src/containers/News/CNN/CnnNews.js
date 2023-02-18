import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../../../config/api-endpoint";
import { Col, Container, Row, ListGroup, Card } from "react-bootstrap";

// Include components:news
import NewsItem from "../../../components/ui/News/NewsItem";
import ProgramSectionTitle from "../../../components/ui/Program/ProgramSectionTitle";
import { Link } from "react-router-dom";

export default class CnnNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT.NEWS.CNN.ALL}`)
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
          <ProgramSectionTitle title="DARI CNN INDONESIA" />
          <Row className="justify-content-arround mb-3">
            <Col lg={4} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title className=" ms-3 text-start">KATEGORI</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Link
                        to="/cnn-news/nasional"
                        className="text-dark text-decoration-none"
                      >
                        Nasional
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnn-news/internasional"
                        className="text-dark text-decoration-none"
                      >
                        Internasional
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnn-news/ekonomi"
                        className="text-dark text-decoration-none"
                      >
                        Ekonomi
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnn-news/olahraga"
                        className="text-dark text-decoration-none"
                      >
                        Olahraga
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnn-news/gaya-hidup"
                        className="text-dark text-decoration-none"
                      >
                        Gaya Hidup
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link
                        to="/cnn-news/hiburan"
                        className="text-dark text-decoration-none"
                      >
                        Hiburan
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
                    CNN Indonesia.com menyajikan berita Terbaru, Terkini
                    Indonesia seputar nasional, politik, ekonomi, internasional,
                    olahraga, teknologi, hiburan, gaya hidup.
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
                  <NewsItem news={data} author="CNN NEWS" />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
