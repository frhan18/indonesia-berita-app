import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Layout from "./components/shared/Layout";
import Loading from "./components/shared/Loading";
import PageNotFound from "./components/shared/PageNotFound";
// Include components
const loading = () => null;

const NewsHomepage = Loadable({
  loader: () => import("./containers/NewsHomepage"),
  loading: Loading,
});

const NewsLatest = Loadable({
  loader: () => import("./containers/NewsLatest"),
  loading: loading,
});

const NewsTeknologi = Loadable({
  loader: () => import("./containers/NewsTeknologi"),
  loading: loading,
});

const NewsSports = Loadable({
  loader: () => import("./containers/NewsSports"),
  loading: loading,
});

const NewsHiburan = Loadable({
  loader: () => import("./containers/NewsHiburan"),
  loading: loading,
});

const NewsLifestyle = Loadable({
  loader: () => import("./containers/NewsLifestyle"),
  loading: loading,
});

const NewsInvest = Loadable({
  loader: () => import("./containers/NewsInvest"),
  loading: loading,
});

const NewsBusiness = Loadable({
  loader: () => import("./containers/NewsBusiness"),
  loading: loading,
});
const NewsEkonomi = Loadable({
  loader: () => import("./containers/NewsEkonomi"),
  loading: Loading,
});
const NewsSyariah = Loadable({
  loader: () => import("./containers/NewsSyariah"),
  loading: loading,
});
const NewsNasional = Loadable({
  loader: () => import("./containers/NewsNasional"),
  loading: loading,
});
const NewsInternasional = Loadable({
  loader: () => import("./containers/NewsInternasional"),
  loading: loading,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    // Tambah state loading
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    // Update status render ?
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          {this.state.loading ? ( // Cek loading komponent ?
            <Loading />
          ) : (
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route exact path="/dunia" element={<NewsInternasional />} />
              <Route exact path="/indonesia" element={<NewsNasional />} />
              <Route exact path="/syariah" element={<NewsSyariah />} />
              <Route exact path="/ekonomi" element={<NewsEkonomi />} />
              <Route exact path="/bisnis" element={<NewsBusiness />} />
              <Route exact path="/investasi" element={<NewsInvest />} />
              <Route exact path="/gaya-hidup" element={<NewsLifestyle />} />
              <Route exact path="/hiburan" element={<NewsHiburan />} />
              <Route exact path="/olahraga" element={<NewsSports />} />
              <Route exact path="/teknologi" element={<NewsTeknologi />} />
              <Route exact path="/terbaru" element={<NewsLatest />} />
              <Route exact path="/" element={<NewsHomepage />} />
            </Routes>
          )}
          {/* <Footer /> */}
        </Layout>
      </React.Fragment>
    );
  }
}
