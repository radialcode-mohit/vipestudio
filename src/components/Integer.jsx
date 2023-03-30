import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import file from "../assets/images/img/integer/file.png";
import box from "../assets/images/img/integer/boxes.png";
import call from "../assets/images/img/integer/call.png";

const Integer = () => {
  return (
    <section className="pt-5">
      <Container>
        <h1 className="ff_konexy fw_400 fs_4xl clr_black text-md-start text-center">
          Integer et nisl non
        </h1>
        <Row className="pt-5">
          <Col lg={4} md={6}>
            <div className="bg_white text-center pt-5 pb-4 px-4 h-100">
              <div>
                <img src={file} alt="file" />
              </div>
              <h1 className="pt-5 ff_inter fw_600 fs_xl clr_black">
                Enterprise WordPress Solutions{" "}
              </h1>
              <p className="pt-3 ff_gilroy_400 fs_md clr_black">
                Pretium, a et sapien non nunc libero. Id dolor sed quis
                convallis turpis purus feugiat nibh eu. Auctor cras hac ac,
                sociis diam montes, turpis commodo elit.
              </p>
              <a className="ff_gilroy_600 fs_md  " href="#">
                Learn More
              </a>
            </div>
          </Col>
          <Col lg={4} md={6} className="mt-md-0 mt-4">
            <div className="bg_white text-center pt-5 pb-4 px-4 h-100">
              <div>
                <img src={box} alt="box" />
              </div>
              <h1 className="pt-4 mt-2 ff_inter fw_600 fs_xl clr_black">
                Small to Mid Size Business Development
              </h1>
              <p className="pt-3 ff_gilroy_400 fs_md clr_black">
                Et nunc fermentum id amet tempus, elementum. Eget ac ultrices
                tortor, mattis amet blandit aenean amet. Massa diam lacus,
                aliquam neque, cursus.
              </p>
              <a className="ff_gilroy_600 fs_md  " href="#">
                Learn More
              </a>
            </div>
          </Col>
          <Col lg={4} md={6} className="mt-lg-0 mt-4">
            <div className="bg_white text-center pt-5 pb-4 px-4 h-100">
              <div>
                <img src={call} alt="call" />
              </div>
              <h1 className="pt-4 mt-3 ff_inter fw_600 fs_xl clr_black">
                Support & Maintenance
              </h1>
              <p className="pt-3 ff_gilroy_400 fs_md clr_black">
                Ac donec ipsum fringilla tortor, consectetur etiam sociis amet
                quis. Viverra volutpat pretium non in fusce tellus sed urna.
                Pharetra ullamcorper et donec aliquam.
              </p>
              <a className="ff_gilroy_600 fs_md  " href="#">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Integer;
