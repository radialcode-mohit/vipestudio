import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/img/team/mainimg.png";
const TeamSection = () => {
  return (
    <section className="bg_darkwhite">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row py-5 py-lg-0">
          <Col lg={6} className="text-center text-lg-start mt-4 mt-lg-0">
            <p className="ff_konexy fw_400 fs_4xl">Team Full of Stars </p>
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
          <Col lg={6} className="transform_transy100px">
            <img src={mainimg} alt="mainimg" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamSection;
