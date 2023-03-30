import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import pagelogo from "../assets/images/img/footer/pagelogo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import world from "../assets/images/img/navbar/earth.png";
import { useState } from "react";
function OffcanvasExample() {
  const [first, setfirst] = useState(true);
  return (
    <nav className="bg-black py-3">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <img src={pagelogo} alt="pagelogo" className="me-4" />
          <div
            className={
              first
                ? "mobileviewnav d-flex justify-content-between w-100 left_100"
                : "mobileviewnav d-flex justify-content-between w-100 left_0"
            }
          >
            <div className="d-flex align-items-center col-xxl-5 h-100 col-12 modification position-relative">
              <DropdownButton
                id="dropdown-item-button"
                title="WordPress Solution"
                className="background_black ms-xxl-4"
              >
                <Dropdown.ItemText className="ff_gilroy_400 fs_md">
                  Dropdown item text
                </Dropdown.ItemText>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Action
                </Dropdown.Item>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Something else
                </Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                id="dropdown-item-button"
                className="ms-xxl-4"
                title="Services"
              >
                <Dropdown.ItemText className="ff_gilroy_400 fs_md">
                  Dropdown item text
                </Dropdown.ItemText>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Action
                </Dropdown.Item>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Something else
                </Dropdown.Item>
              </DropdownButton>
              <a href="#" className="ms-xxl-4">
                <span className="ff_gilroy_400 fw_400 fs_md clr_white">
                  Portfolio
                </span>
              </a>
              <DropdownButton
                id="dropdown-item-button"
                className="ms-xxl-4"
                title="About"
              >
                <Dropdown.ItemText className="ff_gilroy_400 fs_md">
                  Dropdown item text
                </Dropdown.ItemText>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Action
                </Dropdown.Item>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item as="button" className="ff_gilroy_400 fs_md">
                  Something else
                </Dropdown.Item>
              </DropdownButton>
              <a href="#" className="ms-xxl-4">
                <span className="ff_gilroy_400 fw_400 fs_md clr_white">
                  Blog
                </span>
              </a>
              {/* unhide content --------------- */}
              <a
                href="#"
                className="ff_inter fw_400 fs_sm clr_white me-xxl-4 d-xxl-none"
              >
                1 888 266-6917 (eu?)
              </a>
              <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-4 rounded-pill me-xxl-4 d-xxl-none">
                Contact Us
              </button>
              <DropdownButton
                id="dropdown-item-button"
                title="Eng"
                className=" d-inline-block earth d-xxl-none"
              >
                <Dropdown.ItemText className="ff_gilroy_400 fs_md ">
                  Hin
                </Dropdown.ItemText>
              </DropdownButton>
              <div
                className="naviconcontainer position-absolute toogle_icon"
                onClick={() => {
                  setfirst(true);
                }}
              >
                <div className="navicon"></div>
                <div className="navicon"></div>
                <div className="navicon"></div>
              </div>
            </div>
            <div className="col-5 text-end d-none d-xxl-block">
              <a href="#" className="ff_inter fw_400 fs_sm clr_white me-xxl-4">
                1 888 266-6917 (eu?)
              </a>
              <button className="ff_gilroy_600 fs_md clr_white bg_blue border-0 py-2 px-4 rounded-pill me-xxl-4">
                Contact Us
              </button>
              {/* <div className="d-flex">
              <img src={world} alt="world" /> */}
              <DropdownButton
                id="dropdown-item-button"
                title="Eng"
                className=" d-inline-block earth"
              >
                <Dropdown.ItemText className="ff_gilroy_400 fs_md ">
                  Hin
                </Dropdown.ItemText>
              </DropdownButton>
              {/* </div> */}
            </div>
          </div>
          <div
            className="naviconcontainer"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="navicon"></div>
            <div className="navicon"></div>
            <div className="navicon"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default OffcanvasExample;
