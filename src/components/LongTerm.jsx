import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import firstimg from "../assets/images/img/longtermsection/1stimg.png";
import secondimg from "../assets/images/img/longtermsection/2ndimg.png";
import thirdimg from "../assets/images/img/longtermsection/3rdimg.png";
import fourthimg from "../assets/images/img/longtermsection/4rthimg.png";
const LongTerm = () => {
  return (
    <section className="bg_darkwhite py-5">
      <Container>
        <p className="ff_konexy fw_400 fs_4xl text-center text-lg-start">
          Long Term <br /> WordPress Partner
        </p>
        <p className="ff_gilroy_400  fs_md text-center text-lg-start">
          Our motto is the long-term partnership – we will not only develop your
          perfect website, but will <br /> be behind you through the whole
          process. They already trusted us:
        </p>
        <Row className="align-items-center justify-content-center ">
          <Col xs={6} sm={3} lg={2} className="mt-3">
            <img className="w-100" src={firstimg} alt="firstimg" />
          </Col>
          <Col xs={6} sm={3} lg={2} className="mt-3">
            <img className="w-100" src={secondimg} alt="secondimg" />
          </Col>
          <Col xs={6} sm={3} lg={2} className="mt-3">
            <img className="w-100" src={thirdimg} alt="thirdimg" />
          </Col>
          <Col xs={6} sm={3} lg={2} className="mt-3">
            <img className="w-100" src={secondimg} alt="secondimg" />
          </Col>
          <Col xs={6} sm={3} lg={2} className="mt-3">
            <img className="w-100" src={fourthimg} alt="fourthimg" />
          </Col>
          <Col xs={6} sm={3} lg={2} className="mt-3">
            <img className="w-100" src={secondimg} alt="secondimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LongTerm;
