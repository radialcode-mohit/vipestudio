import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team from "../assets/images/img/studio/team.png";
import startrust from "../assets/images/img/studio/startrust.png";
import star from "../assets/images/img/studio/star.png";
import store from "../assets/images/img/studio/playstor.png";

const Hero = () => {
  return (
    <section className="bg_black py-5 overflow-hidden">
      <Container className="pt-5">
        <Row className="flex-lg-row flex-column-reverse ">
          <Col lg={6}>
            <div className="text-lg-start text-center mt-lg-0 mt-4">
              <h1 className="ff_konexy fw_400 fs_5xl clr_white back_line">
                WordPress Development Agency
              </h1>
              <h2 className="ff_gilroy_700 fs_xl clr_white pt-4">
                for Enterprise + Friendly Team{" "}
              </h2>
              <p className="ff_gilroy_400 fs_md clr_white op_07 pt-4">
                Vipe Studio is a WordPress Agency for development - a long-term
                partner for any WordPress service. Websites and,online shops
                development, maintenance and customization is what we do best.
              </p>
              <div className="justify-content-lg-start justify-content-center d-flex align-items-center mt-s flex-sm-row flex-column">
                <button className="ff_gilroy_600 fs_md clr_white bg_blue btn_border py-2 px-4 ">
                  Get Started
                </button>
                <div className="d-flex align-items-center ms-4 mt-sm-0 mt-4">
                  <div>
                    <img src={store} alt="store" />
                  </div>
                  <p className="ff_gilroy_400 fs_md clr_white op_07 mb-0 ps-3">
                    What is Vipe? (1min)
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="position-relative">
            <div className="img_shadow"></div>
            <div className="img_shadow2"></div>
            <div className="position-relative l_30">
              <img className="w-100" src={team} alt="team" />
              <div className="bg_blur position-absolute btm_2 pt-2 px-3 d-sm-block d-none">
                <div>
                  <img src={startrust} alt="startrust" />
                </div>
                <div className="mt-2">
                  <img src={star} alt="star" />
                </div>
                <p className="ff_inter fw_400 fs_md clr_white pt-2">
                  Rated 5.0 Excellent
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
