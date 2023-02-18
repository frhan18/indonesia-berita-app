import React, { Component, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ContentLayouts from "./Layouts/ContentLayouts";

// Include components
const Navigation = React.lazy(() => import("./components/shared/Navigation"));
const NewsHomepage = React.lazy(() => import("./containers/NewsHomepage"));
const NewsMostViewed = React.lazy(() => import("./containers/NewsMostViewed"));
const NewsTeknologi = React.lazy(() => import("./containers/NewsTeknologi"));
const NewsSports = React.lazy(() => import("./containers/NewsSports"));
const NewsHiburan = React.lazy(() => import("./containers/NewsHiburan"));
const NewsLifestyle = React.lazy(() => import("./containers/NewsLifestyle"));
const NewsInvest = React.lazy(() => import("./containers/NewsInvest"));
const NewsBusiness = React.lazy(() => import("./containers/NewsBusiness"));
const NewsEkonomi = React.lazy(() => import("./containers/NewsEkonomi"));
const NewsSyariah = React.lazy(() => import("./containers/NewsSyariah"));
const NewsNasional = React.lazy(() => import("./containers/NewsNasional"));
const NewsInternasional = React.lazy(() =>
  import("./containers/NewsInternasional")
);
export default class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <Navigation />
        <ContentLayouts>
          <Suspense
            fallback={
              <div className="loader">
                <div className="ring"></div>
                <div className="loading">Sedang memuat...</div>
              </div>
            }
          >
            <Routes>
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
              <Route exact path="/terkini" element={<NewsMostViewed />} />
              <Route exact path="/" element={<NewsHomepage />} />
            </Routes>
          </Suspense>
        </ContentLayouts>
      </React.StrictMode>
    );
  }
}
