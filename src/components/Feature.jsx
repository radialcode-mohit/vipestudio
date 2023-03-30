import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import news from "../assets/images/img/yahoo/news.png";
import finance from "../assets/images/img/yahoo/finance.png";
import topic from "../assets/images/img/yahoo/topic.png";
import life from "../assets/images/img/yahoo/life.png";

const Feature = () => {
  return (
    <section className="bg_gray py-5">
      <Container className="py-4">
        <h1 className="ff_konexy fw_400 fs_4xl clr_black text-md-start text-center">
          Featured on
        </h1>
        <Row className="align-items-center pt-4">
          <Col lg={2} md={3} sm={4} xs={4}>
            <div>
              <img className="w-100" src={news} alt="news" />
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={4}>
            <div>
              <img className="w-100" src={finance} alt="finance" />
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={4}>
            <div>
              <img className="w-100" src={news} alt="news" />
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={4} className="mt-md-0 mt-4">
            <div>
              <img className="w-100" src={topic} alt="topic" />
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={4} className="mt-lg-0 mt-4">
            <div>
              <img className="w-100" src={life} alt="life" />
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={4} className="mt-lg-0 mt-4">
            <div>
              <img className="w-100" src={topic} alt="topic" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;
