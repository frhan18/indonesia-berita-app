import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import API_ENDPOINT from "../../config/api-endpoint";
import NewsItem from "./News/NewsItem";
import ProgramSectionTitle from "./Program/ProgramSectionTitle";

export default function SearchNews() {
  const [APIData, setAPIData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT.NEWS.ALL}`)
      .then((response) => setAPIData(response.data.data))
      .catch((error) => {
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
    <div className="py-5 mb-3">
      <Row className="justify-content-center mb-3">
        <Col md={5}>
          <Form onSubmit={onSubmitSearchHandler}>
            <div className="d-flex">
              <Form.Control
                autoComplete="on"
                autoFocus
                type="search"
                placeholder="Mau cari berita apa?"
                className="me-2 rounded"
                aria-label="Mau cari berita apa?"
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
