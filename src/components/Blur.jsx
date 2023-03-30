import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import search from "../assets/images/img/studio/search.png";

const Blur = () => {
  return (
    <section className="pt-5 bg-black">
      <div className="bg_blr py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="text-lg-start text-center">
                <h2 className="ff_konexy fw_400 fs_2xl clr_white">
                  Tell us more....
                </h2>
                <p className="ff_gilroy_400 fs_md clr_white max_573">
                  Lectus vitae est ultrices sed. Sit aliquam commodo hac donec
                  augue in quis. Magna vel orci sem neque fringilla et lectus
                  laoreet.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="d-flex bg_gry justify-content-between align-items-center py-3 px-4">
                <input
                  id="search"
                  className="outline_0 w_90 bg_trnsprnt clr_white"
                  type="text"
                  placeholder="What do you need assistance with?		"
                />
                <div className="bg_ black">
                  <a href="#search">
                    <img src={search} alt="search" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Blur;
