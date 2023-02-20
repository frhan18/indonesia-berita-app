import React, { Component } from "react";
import axios from "axios";
import API_ENDPOINT from "../config/api-endpoint";
import { Helmet } from "react-helmet";

// Include components:news;
import HomepageMenu from "../components/ui/News/HomepageMenu";
import Loading from "../components/shared/Loading";
import { Link } from "react-router-dom";

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
      .get(`${API_ENDPOINT.NEWS.CNBC.NEWS}`)
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
      .get(`${API_ENDPOINT.NEWS.CNBC.TECH}`)
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
      .get(`${API_ENDPOINT.NEWS.CNBC.LIFESTYLE}`)
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
      .get(`${API_ENDPOINT.NEWS.CNN.NASIONAL}`)
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
      .get(`${API_ENDPOINT.NEWS.CNN.INTERNASIONAL}`)
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
        <section className="idn-container" id="container">
          {this.state.loading ? (
            <Loading />
          ) : (
            <div>
              <div className="container-fluid idn-hero-container">
                <div className="py-3 pt-3">
                  <div className=" pt-5 mt-5">
                    <h1 className="display-3">Selamat Datang!</h1>
                    <h1 className="display-3 mb-4">
                      Temukan berita internasional & nasional.
                    </h1>
                    <Link to="/terkini" className="btn btn-lg btn-dark">
                      Temukan Semua Berita
                    </Link>
                    <Link to="/search" className="btn btn-lg btn-dark ms-2">
                      Cari Semua Berita
                    </Link>
                  </div>
                </div>
              </div>
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
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}
