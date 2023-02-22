import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Helmet } from "react-helmet";

// Include components:news;
import HomepageMenu from "../components/ui/News/HomepageMenu";
import Loading from "../components/shared/Loading";
import styled from "styled-components";
import SearchNews from "../components/ui/SearchNews";
import { Col, Row } from "react-bootstrap";

const HomepageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default class NewsHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latest: [],
      tecnology: [],
      lifestyle: [],
      mostViewed: [],
      nasional: [],
      internasional: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchDataNewsTerkini();
    this.fetchDataNewsInternasional();
    this.fetchDataNewsNasional();
    this.fetchDataNewsKesehatan();
    this.fetchDataNewsTeknologi();

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  async fetchDataNewsTerkini() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.LATEST}`);
      const responseData = await response.data;
      // set state
      this.setState({ latest: responseData.data });
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

  async fetchDataNewsInternasional() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.INTERNASIONAL}`);
      const responseData = await response.data;
      // set state
      this.setState({ internasional: responseData.data });
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

  async fetchDataNewsNasional() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.NASIONAL}`);
      const responseData = await response.data;
      // set state
      this.setState({ nasional: responseData.data });
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

  async fetchDataNewsKesehatan() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.LIFESTYLE}`);
      const responseData = await response.data;
      // set state
      this.setState({ lifestyle: responseData.data });
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

  async fetchDataNewsTeknologi() {
    try {
      const response = await axios.get(`${API_ENDPOINT.NEWS.TECH}`);
      const responseData = await response.data;
      // set state
      this.setState({ tecnology: responseData.data });
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
      <React.Fragment>
        <Helmet
          encodeSpecialCharacters={true}
          defaultTitle="Indonesia Berita"
          titleTemplate="Indonesia Berita"
        />
        <HomepageContainer>
          {this.state.loading ? (
            <Loading />
          ) : (
            <>
              <HomepageMenu
                headingTitle="BERITA HARI INI"
                headingLinkName="Lihat semua"
                headingLink="/terkini"
                items={this.state.latest}
                infoAuthor="CBNC INDONESIA"
              />
              <HomepageMenu
                headingTitle="BERITA INTERNASIONAL"
                headingLinkName="Lihat semua"
                headingLink="/dunia"
                items={this.state.internasional}
                infoAuthor="CNN INDONESIA"
              />
              <HomepageMenu
                headingTitle="BERITA DALAM NEGERI"
                headingLinkName="Lihat semua"
                headingLink="/indonesia"
                items={this.state.nasional}
                infoAuthor="CNN INDONESIA"
              />
              <HomepageMenu
                headingTitle="BERITA KESEHATAN"
                headingLinkName="Lihat semua"
                headingLink="/gaya-hidup"
                items={this.state.lifestyle}
                infoAuthor="CBNC INDONESIA"
              />
              <HomepageMenu
                headingTitle="BERITA TEKNOLOGI"
                headingLinkName="Lihat semua"
                headingLink="/teknologi"
                items={this.state.tecnology}
                infoAuthor="CBNC INDONESIA"
              />
            </>
          )}
        </HomepageContainer>
      </React.Fragment>
    );
  }
}
