import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/svg/protecturo.svg";
import telegram from "../assets/svg/telegram.svg";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import twiter from "../assets/svg/twiter.svg";
const Footer = () => {
  return (
    <>
      <section className="py-lg-5 py-4">
        <Container className="pt-lg-5 pt-2">
          <Row>
            <Col lg={4}>
              <img src={logo} alt="logo" />
              <p className="ff_Medium fw_500 fs_sm clr_gray_100 mt-3 pe-xl-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nis commodo consequat.
              </p>
              <div className="d-flex gap-3 mt-lg-4 pt-lg-3 mt-3 mb-4 footericon">
                <a href="#">
                  <img
                    src={telegram}
                    alt="telegram"
                    style={{ width: 32, height: 32 }}
                  />
                </a>
                <a href="#">
                  <img
                    src={facebook}
                    alt="facebook"
                    style={{ width: 32, height: 32 }}
                  />
                </a>
                <a href="#">
                  <img
                    src={instagram}
                    alt="instagram"
                    style={{ width: 32, height: 32 }}
                  />
                </a>
                <a href="#">
                  <img
                    src={twiter}
                    alt="twiter"
                    style={{ width: 32, height: 32 }}
                  />
                </a>
              </div>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <p className="ff_ExtraBold fw_700 fs_2xl clr_white mt-4 pb-lg-1">
                Products
              </p>
              <ul className="p-0 headhover">
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    eSIM SIM
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    SIM Card
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Wifi HotSopt
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <p className="ff_ExtraBold fw_700 fs_2xl clr_white mt-4 pb-lg-1">
                Company
              </p>
              <ul className="p-0 headhover">
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    About
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Careers
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Ventures
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Grants
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Docs
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <p className="ff_ExtraBold fw_700 fs_2xl clr_white mt-4 pb-lg-1">
                Resources
              </p>
              <ul className="p-0 headhover">
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Support Center
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    FAQs
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Partners
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Blogs
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Updates & News
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={3} lg={2}>
              <p className="ff_ExtraBold fw_700 fs_2xl clr_white mt-4 pb-lg-1">
                My Account
              </p>
              <ul className="p-0 headhover">
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Profile
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Favorites
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Watchlist
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    My Collections
                  </a>
                </li>
                <li className="mb-2 mb-lg-3">
                  <a href="#" className="ff_Medium fw_600 fs_sm clr_gray_100">
                    Settings
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <div className="d-md-flex justify-content-between py-lg-4 py-3 mt-lg-3">
            <p className="ff_Medium fw_500 fs_sm clr_gray_100">
              © 2022 Protecturo, All rights reserved.
            </p>
            <p className="ff_Medium fw_500 fs_sm clr_gray_100">
              Privacy Policy • Terms & Conditions
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
