import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/img/agilewordpress/mainimg.png";
const WordPress = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={6}>
            <img src={mainimg} alt="mainimg" className="w-100" />
          </Col>
          <Col lg={6}>
            <p className="ff_konexy fw_400 fs_3xl  clr_blue">
              Agile WordPress
              <span className="clr_black">Development Project management</span>
            </p>
            <p className="ff_gilroy_400 fs_md">
              Suspendisse consequat egestas arcu et et. Viverra quis euismod
              neque luctus bibendum. Fringilla in nibh fringilla vulputate in.
              Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus
              tortor sollicitudin risus eget euismod in bibendum turpis.
            </p>
            <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-4 rounded-pill">
              Explore
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WordPress;
