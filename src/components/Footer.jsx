import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import search from "../assets/images/img/footer/search.png";
import facebook from "../assets/images/img/footer/facebook.png";
import github from "../assets/images/img/footer/github.png";
import linkdin from "../assets/images/img/footer/in.png";
import insta from "../assets/images/img/footer/insta.png";
import tweter from "../assets/images/img/footer/tweter.png";
import wordpress from "../assets/images/img/footer/wordpress.png";
import pageelogo from "../assets/images/img/footer/pagelogo.png";
const Footer = () => {
  return (
    <footer className="bg_black pt-lg-5">
      <Container className="pt-5">
        {/* search row  */}
        <Row className="align-items-center">
          <Col>
            <img src={pageelogo} alt="pageelogo" />
          </Col>
          <Col className="text-end mt-3 mt-lg-0" lg={3}>
            <div className="d-flex py-2 px-4 align-items-center rounded-pill bg_white justify-content-between">
              <input
                id="input"
                type="search"
                placeholder="Search here...."
                className="ff_gilroy_400 fs_md w-100 outline_0 border-0 rounded-pill"
              />
              <a href="#input">
                <img src={search} alt="search" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col lg={6}>
            <Row>
              <Col sm={6} lg={6}>
                <ul className="ps-0">
                  <li className=" position-relative ff_gilroy_400 fs_md clr_white mb-3">
                    Services
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    WordPress Development
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    WooCommerce Development
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    WordPress Maintenance
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    Speed Optimization
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    Dedicated WordPress Developer
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    Headless WordPress Development
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    White Label Development
                  </li>
                </ul>
              </Col>
              <Col sm={6} lg={6}>
                <ul className="ps-0">
                  <li className=" position-relative  ff_gilroy_400 fs_md clr_white mb-3">
                    Services
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    WordPress Hosting
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    PSD, XD, Figma to WordPress Conversion
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    Custom WordPress Theme
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    Custom WordPress Plugins
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    CMS to WordPress
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white arrowimg mb-3">
                    WordPress Malware Removal
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={6}>
            <Row>
              <Col sm={6} lg={6}>
                <ul className="ps-0">
                  <li className=" position-relative  ff_gilroy_400 fs_md clr_white mb-3">
                    Latest Articles
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ff_gilroy_400 fs_sm clr_white mb-4">
                    7 WordPress Plugins to Create an Effective Newsletter
                    03.01.2022
                  </li>
                  <li className="cur_poi hoverbglinear position-relative  ff_gilroy_400 fs_sm clr_white mb-4">
                    What’s the Perfect Blog Post Length for Your WordPress
                    Site’s SEO? 02.01.2022
                  </li>
                  <li className="cur_poi hoverbglinear position-relative  ff_gilroy_400 fs_sm clr_white mb-4">
                    5 Reasons the Future of WordPress Is Headless 01.01.2022
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ff_gilroy_400 fs_sm clr_white mb-4">
                    Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the
                    Amazingly Successful 2021 30.12.2021
                  </li>
                </ul>
              </Col>
              <Col sm={6} lg={6}>
                <ul className="ps-0">
                  <li className=" position-relative  ff_gilroy_400 fs_md clr_white mb-3">
                    Contact
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white phoneimg mb-4">
                    EU: +359 988 993 128
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white phoneimg mb-4">
                    US: +1 (1 888) 266-6917
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white mail mb-4">
                    office@vipestudio.com
                  </li>
                  <li className="cur_poi hoverbglinear position-relative ms-4 ff_gilroy_400 fs_sm clr_white home mb-4">
                    14 Srebarna, Sofia 1407, Bulgaria
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bordertop py-4">
        <Container>
          <Row className="justify-content-lg-between align-items-center">
            <Col lg={4}>
              <p className="ff_gilroy_400 fs_sm clr_white">
                © Vipe Studio 2016-2022
              </p>
              <div className="d-flex">
                <p className="mb-0 ff_gilroy_400 fs_sm clr_white pe-2 borderend">
                  Privacy
                </p>
                <p className="mb-0 ff_gilroy_400 fs_sm clr_white ms-2 pe-2 borderend">
                  Careers
                </p>
                <p className="mb-0 ff_gilroy_400 fs_sm clr_white ms-2 pe-2 borderend">
                  Media
                </p>
                <p className="mb-0 ff_gilroy_400 fs_sm clr_white ms-2 pe-2">
                  Client Area
                </p>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <Row>
                <Col xs={4} lg={2}>
                  <a href="#">
                    <img
                      src={github}
                      alt="github"
                      className="hoverbrightness"
                    />
                  </a>
                </Col>
                <Col xs={4} lg={2}>
                  <a href="#">
                    <img
                      src={linkdin}
                      alt="linkdin"
                      className="hoverbrightness"
                    />
                  </a>
                </Col>
                <Col xs={4} lg={2}>
                  <a href="#">
                    <img
                      src={tweter}
                      alt="tweter"
                      className="hoverbrightness"
                    />
                  </a>
                </Col>
                <Col xs={4} lg={2} className="mt-3 mt-lg-0">
                  <a href="#">
                    <img
                      src={facebook}
                      alt="facebook"
                      className="hoverbrightness"
                    />
                  </a>
                </Col>
                <Col xs={4} lg={2} className="mt-3 mt-lg-0">
                  <a href="#">
                    <img src={insta} alt="insta" className="hoverbrightness" />
                  </a>
                </Col>
                <Col xs={4} lg={2} className="mt-3 mt-lg-0">
                  <a href="#">
                    <img
                      src={wordpress}
                      alt="wordpress"
                      className="hoverbrightness"
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
