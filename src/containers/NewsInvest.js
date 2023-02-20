import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Helmet } from "react-helmet";
import { Col, Row, ThemeProvider } from "react-bootstrap";

// Include components:news
import NewsItem from "../components/ui/News/NewsItem";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import Loading from "../components/shared/Loading";
export default class NewsInvest extends Component {
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
      .get(`${API_ENDPOINT.NEWS.CNBC.INVESTMENT}`)
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
      <div className="py-5 mt-5">
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle=" Berita Investasi"
          titleTemplate="Indonesia Berita"
        ></Helmet>
        <section className="idn-container">
          {this.state.loading ? (
            <Loading />
          ) : (
            <ThemeProvider
              breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
              minBreakpoint="xxs"
            >
              <div className="idn-items-list px-3">
                <ProgramSectionTitle title="BERITA INVESTASI" />
                <Row className="justify-content-arround">
                  {this.state.news?.map((data, index) => (
                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                      <NewsItem news={data} author="CBNC INDONESIA" />
                    </Col>
                  ))}
                </Row>
              </div>
            </ThemeProvider>
          )}
        </section>
      </div>
    );
  }
}