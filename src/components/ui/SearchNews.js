import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import API_ENDPOINT from "../../config/api-endpoint";
import NewsItem from "./NewsItem";
import ProgramSectionTitle from "./Program/ProgramSectionTitle";
import styles from "../../styles/styled.module.css";

export default function SearchNews() {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
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
    if (searchInput !== "") {
      const filteredData = APIData?.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setFilteredResults(filteredData);
      }, 1000);
    } else {
      setFilteredResults(APIData);
    }
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
      }, 500);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div className={`py-5 mb-3 ${styles.searchNews}`}>
      <div className={styles.searchNewsItem}>
        <Row className="justify-content-center mb-3">
          <Col md={5}>
            <Form onSubmit={onSubmitSearchHandler}>
              <div className="d-flex">
                <Form.Control
                  autoComplete="on"
                  autoFocus
                  type="search"
                  placeholder="Masukan kata kunci..."
                  className="me-2 rounded"
                  aria-label="Masukan kata kunci..."
                  size="lg"
                  value={searchInput}
                  onChange={(e) => searchItems(e.target.value)}
                />
                <Button type="submit" variant="dark" size="lg">
                  Cari
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div className="idn-items-list ">
        {loading ? (
          <div className="text-center">Sedang memuat....</div>
        ) : (
          <>
            {filteredResults.length > 1 ? (
              <div>
                <ProgramSectionTitle
                  title={`HASIL PENCARIAN: ${
                    searchInput ? searchInput : "Semua"
                  }`}
                />
                <Row className="justify-content-arround">
                  {filteredResults?.map((data, index) => (
                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                      <NewsItem news={data} author="CNN INDONESIA" />
                    </Col>
                  ))}
                </Row>
              </div>
            ) : (
              <div className="text-center pt-3">
                Pencarian tidak ditemukan...
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
