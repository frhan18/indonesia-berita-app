import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Col, Row } from "react-bootstrap";
// Include components:news
import NewsItem from "../components/ui/News/NewsItem";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import Loading from "../components/shared/Loading";
import { Helmet } from "react-helmet";

export default class NewsMostViewed extends Component {
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
    }, 1500);
  }

  async receivedData() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.LATEST}`);
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

  render() {
    return (
      <>
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle="Indonesia Berita - Terbaru"
          titleTemplate="Indonesia Berita"
        ></Helmet>
        <>
          {this.state.loading ? (
            <Loading />
          ) : (
            <div className="idn-items-list px-md-3 mx-md-3 p-3 py-5 ">
              <ProgramSectionTitle title="BERITA TERBARU" />
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
