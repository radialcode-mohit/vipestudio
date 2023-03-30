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
        <p className="ff_konexy fw_400 fs_4xl">
          Long Term <br /> WordPress Partner
        </p>
        <p className="ff_gilroy_400  fs_md">
          Our motto is the long-term partnership – we will not only develop your
          perfect website, but will <br /> be behind you through the whole
          process. They already trusted us:
        </p>
        <Row className="align-items-center">
          <Col>
            <img src={firstimg} alt="firstimg" />
          </Col>
          <Col>
            <img src={secondimg} alt="secondimg" />
          </Col>
          <Col>
            <img src={thirdimg} alt="thirdimg" />
          </Col>
          <Col>
            <img src={secondimg} alt="secondimg" />
          </Col>
          <Col>
            <img src={fourthimg} alt="fourthimg" />
          </Col>
          <Col>
            <img src={secondimg} alt="secondimg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LongTerm;
