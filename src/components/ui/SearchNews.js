import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import API_ENDPOINT from "../../config/api-endpoint";
import NewsItem from "./NewsItem";
import ProgramSectionTitle from "./Program/ProgramSectionTitle";
import styles from "../../styles/styled.module.css";

export default function SearchNews() {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [displayResult, setDisplayResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT.NEWS.ALL}`, {
        url: `${process.env.REACT_APP_BASE_URL}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setAPIData(response.data.data))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log({ errRequest: error.request });
        } else {
          console.log({ errMessage: error.response.message });
        }
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const onSubmitSearchHandler = (e) => {
    e.preventDefault();
    if (searchInput !== "") {
      const filteredData = APIData?.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setFilteredResults(filteredData);
        setDisplayResult(
          `Hasil pencarian "${searchInput}" ${filteredData.length} hasil ditemukan`
        );
      }, 500);
    } else {
      setFilteredResults([]);
    }
  };

  return (
    <div className={`py-5 mb-3 ${styles.searchNews}`}>
      <div className={styles.searchNewsItem}>
        <Row className="justify-content-center mb-3 py-5 mt-5">
          <Col md={5}>
            <h1 className="text-dark text-uppercase text-center mb-3">
              INDONESIA BERITA
            </h1>
            <Form onSubmit={onSubmitSearchHandler}>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  autoComplete="on"
                  autoFocus
                  type="search"
                  placeholder="Mau cari berita apa?"
                  className="rounded"
                  aria-label="Mau cari berita apa?"
                  size="lg"
                  value={searchInput}
                  onChange={(e) => searchItems(e.target.value)}
                />
                <Button type="submit" variant="dark" size="lg">
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="idn-items-list px-3 ">
        {loading ? (
          <div className="text-center">Sedang memuat....</div>
        ) : (
          <>
            <div>
              <ProgramSectionTitle title={displayResult} />
              <Row className="justify-content-arround">
                {filteredResults?.map((data, index) => (
                  <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                    <NewsItem news={data} author="CNN INDONESIA" />
                  </Col>
                ))}
              </Row>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
