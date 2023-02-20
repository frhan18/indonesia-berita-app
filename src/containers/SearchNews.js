/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import API_ENDPOINT from "../config/api-endpoint";
import NewsItem from "../components/ui/News/NewsItem";
export default function SearchNews() {
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_ENDPOINT.NEWS.CNN.ALL}`)
      .then((response) => setItems(response.data.data))
      .catch((error) =>
        error.response
          ? console.log(
              { errData: error.response.data },
              { errStatus: error.response.status }
            )
          : console.log({ msg: error.message })
      );
  }, []);

  const filteredData = items?.filter((filteredData) =>
    filteredData.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const onSearchHandler = (e) => {
    setSearchField(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="py-5 mt-5 mb-5 px-3">
      <div>
        <div className="text-center">
          <ProgramSectionTitle title="BERITA APA YANG KAMU CARI?" />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <InputGroup className="mb-3">
              <Form.Control
                type="search"
                placeholder="Cari berita..."
                aria-label="Cari berita..."
                aria-describedby="basic-addon2"
                value={searchField}
                onChange={onSearchHandler}
                autoFocus
              />
            </InputGroup>
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-center py-3">
          {loading ? (
            <div className="text-dark text-center">Sedang memuat....</div>
          ) : (
            <div>
              <Row className="justify-content-arround">
                {searchField &&
                  filteredData?.map((data, index) => (
                    <Col xxl={3} xl={4} lg={4} md={6} sm={12} key={index}>
                      <NewsItem news={data} author="CNN NEWS" />
                    </Col>
                  ))}
              </Row>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
