import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Helmet } from "react-helmet";

// Include components:news;
import HomepageMenu from "../components/ui/News/HomepageMenu";
import Loading from "../components/shared/Loading";
import styled from "styled-components";

const HomepageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default class NewsHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tecnology: [],
      lifestyle: [],
      mostViewed: [],
      nasional: [],
      internasional: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getTeknologiLoadApi();
    this.getLifestyleLoadApi();
    this.getMostViewedLoadApi();
    this.getNasionalNewsLoadApi();
    this.getInternasionalNewsLoadApi();

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  getMostViewedLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.LATEST}`)
      .then((response) => this.setState({ mostViewed: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }

  getTeknologiLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.TECH}`)
      .then((response) => this.setState({ tecnology: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }

  getLifestyleLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.LIFESTYLE}`)
      .then((response) => this.setState({ lifestyle: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }
  getNasionalNewsLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.NASIONAL}`)
      .then((response) => this.setState({ nasional: response.data.data }))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }
  getInternasionalNewsLoadApi() {
    axios
      .get(`${API_ENDPOINT.NEWS.INTERNASIONAL}`)
      .then((response) => this.setState({ internasional: response.data.data }))
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
                items={this.state.mostViewed}
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
