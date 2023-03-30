import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import right from "../assets/images/img/studio/right.png";
import ryt from "../assets/images/img/studio/ryt.png";
import girl from "../assets/images/img/studio/girl.png";

const Studio = () => {
  return (
    <section className="bg_black pt-5 overflow-hidden mt-5">
      <Container className="pt-3">
        <Row className="pb-5">
          <Col lg={5}>
            <div>
              <h1 className="ff_konexy fw_400 fs_4xl clr_white text-lg-start text-center">
                All Vipe Studio WordPress services include:{" "}
              </h1>
            </div>
          </Col>
          <Col lg={7} className="mt-lg-0 mt-5">
            <Row>
              <Col sm={6}>
                <div>
                  <h1 className="ff_gilroy_600 fs_xl clr_white">By Industry</h1>
                  <div className="d-flex mt-4 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Lorem in elementum pellentesque
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Molestie cursus praesent mi
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Leo sed viverra cras
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Laoreet feugiat ut at
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Risus aliquam molestie viverra
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Diam enim pulvinar velit
                      </a>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={6} className="mt-sm-0 mt-5">
                <div>
                  <h1 className="ff_gilroy_600 fs_xl clr_white">By Services</h1>
                  <div className="d-flex mt-4 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Accumsan, dui a semper
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Interdum malesuada vulputate neque
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Nullam non a, morbi
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Arcu morbi leo eu
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Viverra venenatis, in ornare
                      </a>
                    </p>
                  </div>
                  <div className="d-flex mt-3 bg_hover">
                    <div>
                      <img src={right} alt="right" />
                    </div>
                    <p className="ps-2 mb-0">
                      <a className="clr_white ff_gilroy_400 fs_md" href="#">
                        Erat id aliquam habitant
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-lg-5 py-5 position-relative">
          <div className="blur z_0"></div>
          <div className="blur2"></div>
          <Row className="bg_black border_card z-1 position-relative pt-4 px-3 pb-3 flex-lg-row flex-column-reverse">
            <Col lg={8}>
              <Row>
                <Col lg={6}>
                  <div>
                    <h1 className="ff_konexy fw_400 fs_2xl clr_white text-lg-start text-center mt-lg-0 mt-4">
                      Not Sure which service you need yet?
                    </h1>
                    <div className="text-lg-start text-center">
                      <button className="ff_gilroy_600 fs_md clr_white bg_blue btn_border py-2 px-3 mt-4">
                        Schedule An Appointment
                      </button>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="pt-lg-0 pt-4">
                    <h1 className="ff_gilroy_700 fs_xl clr_white text-lg-start text-center">
                      20-m free consultation that will help us identifyif you
                      need
                    </h1>
                    <div className="d-flex mt-4 bg_hover">
                      <div>
                        <img src={ryt} alt="right" />
                      </div>
                      <p className="ps-2 mb-0">
                        <a className="clr_white ff_gilroy_400 fs_md" href="#">
                          Technical Description & Discovery
                        </a>
                      </p>
                    </div>
                    <div className="d-flex mt-4 bg_hover">
                      <div>
                        <img src={ryt} alt="right" />
                      </div>
                      <p className="ps-2 mb-0">
                        <a className="clr_white ff_gilroy_400 fs_md" href="#">
                          Custom WordPress Development
                        </a>
                      </p>
                    </div>
                    <div className="d-flex mt-4 bg_hover">
                      <div>
                        <img src={ryt} alt="right" />
                      </div>
                      <p className="ps-2 mb-0">
                        <a className="clr_white ff_gilroy_400 fs_md" href="#">
                          Support & Maintenance
                        </a>
                      </p>
                    </div>
                    <div className="d-flex mt-4 bg_hover">
                      <div>
                        <img src={ryt} alt="right" />
                      </div>
                      <p className="ps-2 mb-0">
                        <a className="clr_white ff_gilroy_400 fs_md" href="#">
                          Other WordPress Service
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={10} className="m-lg-0 m-auto">
              <div className="py-2">
                <img className="w-100" src={girl} alt="girl" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Studio;
