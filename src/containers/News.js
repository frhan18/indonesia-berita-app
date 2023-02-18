import React, { Component } from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Include components:program
import ProgramSectionTitle from "../components/ui/Program/ProgramSectionTitle";
import ProgramItem from "../components/ui/Program/ProgramItem";

export default class News extends Component {
  render() {
    return (
      <section className="idn-container" id="program">
        <Container>
          <ProgramSectionTitle title="Pilihan program berita indonesia" />
          <Row>
            <ProgramItem
              title="CNN NEWS"
              desc=" CNN Indonesia.com menyajikan berita Terbaru, Terkini Indonesia
            seputar nasional, politik, ekonomi, internasional, olahraga,
            teknologi, hiburan, gaya hidup."
              buttonLinkName="Lihat Berita"
              buttonLinkTo="/cnn-news"
              buttonLinkRedirectName="Kunjungi situs"
              buttonLinkRedirect="https://www.cnnindonesia.com/"
            />
            <ProgramItem
              title="CBNC NEWS"
              desc=" CNBC Indonesia merupakan media massa online yang terafiliasi dengan CNBC Internasional. CNBC Indonesia merupakan bagian dari detiknetwork di bawah Grup Transmedia."
              buttonLinkName="Lihat Berita"
              buttonLinkTo="/cnbc-news"
              buttonLinkRedirectName="Kunjungi situs"
              buttonLinkRedirect="https://www.cnbcindonesia.com/"
            />
          </Row>
        </Container>
      </section>
    );
  }
}
