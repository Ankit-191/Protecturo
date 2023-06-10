import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import googleplay from "../assets/svg/googleplay.svg";
import appstore from "../assets/svg/appstore.svg";
import connectivity from "../assets/images/webp/connectivity.webp";
const Instantapp = () => {
  return (
    <>
      <section className="py-4 my-xl-5">
        <Container className="pt-xl-5 mt-xl-4">
          <Row className="bg_connectivity position-relative align-items-center justify-content-center">
            <Col lg={7}>
              <div className="py-lg-5 py-4 px-xxl-5 ms-lg-4 my-xxl-4">
                <h5 className="ff_ExtraBold fw_700 fs_6xl clr_white mw_787 mb-3 pb-xl-1 tracking_tighter">
                  Instant connectivity with the Protecturo app
                </h5>
                <p className="ff_Medium fw_500 fs_2sm clr_gray_100 mw_787 mb-xl-4 mb-3 pb-xl-3">
                  The ideal for the 21st century roadwarrior. The Protecturo app
                  lets you to grab a single data plan where and when you want -
                  at home or in any of our 190+ destinations. Select a plan from
                  the app, download an
                  <span className="textred fw_700"> eSIM</span>, and you'll
                  connect on the spot, on physical SIM card required.
                </p>
                <button className="bg-transparent border-0 pe-3 mb-3 mb-sm-0">
                  <img src={googleplay} alt="Google Play" />
                </button>
                <button className="bg-transparent border-0 ms-lg-1">
                  <img src={appstore} alt="App Store" />
                </button>
              </div>
            </Col>
            <Col sm={6} lg={5}>
              <img
                src={connectivity}
                alt="connectivity"
                className="connectivity_maxw_550 w-100 xlposition_absolute bottom-0 end-0"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Instantapp;
