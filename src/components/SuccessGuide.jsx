import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import mainimg from "../assets/images/img/successguide/robot.png";
import visa from "../assets/images/img/successguide/visaimg.png";
const SuccessGuide = () => {
  const [first, setfirst] = useState(1);
  return (
    <section className="pt-5">
      <Container className="pt-lg-5">
        <div className="pt-lg-5"></div>
        <Row className="pt-lg-5 align-items-center">
          <Col lg={4}>
            <img src={mainimg} alt="mainimg" className="w-100" />
          </Col>
          <Col lg={8} className="mt-4 mt-lg-0 text-center text-lg-start">
            <div className="max_w_570px">
              <p className="ff_gilroy_400 fs_md">HAVE YOU SEEN OUR MASCOT?</p>
              <p className="ff_konexy fw_400 fs_4xl">Success Guides </p>
              <Row>
                <Col
                  onClick={() => {
                    setfirst(1);
                  }}
                  xs={6}
                  sm={3}
                >
                  <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-3 rounded-pill">
                    Category-1
                  </button>
                </Col>
                <Col
                  onClick={() => {
                    setfirst(2);
                  }}
                  xs={6}
                  sm={3}
                >
                  <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-3 rounded-pill">
                    Category-2
                  </button>
                </Col>
                <Col
                  onClick={() => {
                    setfirst(3);
                  }}
                  className="mt-3 mt-sm-0"
                  xs={6}
                  sm={3}
                >
                  <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-3 rounded-pill">
                    Category-3
                  </button>
                </Col>
                <Col
                  onClick={() => {
                    setfirst(4);
                  }}
                  className="mt-3 mt-sm-0"
                  xs={6}
                  sm={3}
                >
                  <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-3 rounded-pill">
                    Category-4
                  </button>
                </Col>
              </Row>
            </div>
            {/* catagory 1 */}
            <Row className={first === 1 ? "d_block py-5" : "d_none"}>
              <Col sm={6} lg={4}>
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
              <Col sm={6} lg={4} className="mt-4 mt-sm-0">
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
              <Col sm={6} lg={4} className="mt-4 mt-lg-0">
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
            </Row>
            {/* catagory 2 */}
            <Row className={first === 2 ? "d_block py-5" : "d_none"}>
              <Col sm={6} lg={4}>
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
              <Col sm={6} lg={4} className="mt-4 mt-sm-0">
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
            </Row>
            {/* catagory 3 */}
            <Row className={first === 3 ? "d_block py-5" : "d_none"}>
              <Col sm={6} lg={4}>
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
            </Row>
            {/* catagory 4 */}
            <Row className={first === 4 ? "d_block py-5" : "d_none"}>
              <Col sm={6} lg={4} className="mt-4 mt-lg-0">
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
              <Col sm={6} lg={4} className="mt-4 mt-lg-0">
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
              <Col sm={6} lg={4} className="mt-4 mt-lg-0">
                <div className="visa_img_border p-3">
                  <img src={visa} alt="visa" className="w-100" />
                  <p className="ff_gilroy_600 fs_xl mt-3">Sit diam metus</p>
                  <p className="ff_gilroy_400 fs_md">
                    Arcu amet, consectetur vel pellentesque mattis ipsum sed
                    mattis sed.
                  </p>
                  <a href="#" className="ff_gilroy_600 fs_md clr_blue  ">
                    Read More....
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SuccessGuide;
