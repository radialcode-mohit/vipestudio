import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HaveYou = () => {
  return (
    <section className="transform_transy_65">
      <Container>
        <div className="bg_linear">
          <Row className="justify-content-between align-items-center py-4 px-5">
            <Col lg={6}>
              <p className="ff_konexy fw_400 fs_4xl clr_white">Have you</p>
              <p className="ff_gilroy_600 fs_xl clr_white">
                read our study about Speed and Performance in WordPress?
              </p>
            </Col>
            <Col lg={4} className="text-end">
              <button className="clr_blue rounded-pill bg_white py-2 ff_inter fs_md fw_600 border-0 px-4">
                Check It Out
              </button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HaveYou;
