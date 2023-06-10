import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import connectivity from "../assets/svg/g10.svg";
import Btnred from "./Btnred";
const Global = () => {
  return (
    <>
      <section className="py-4 bg_connectivity">
        <Container className="pt-xl-5">
          <Row className="position-relative align-items-center justify-content-center">
            <Col sm={6} lg={5}>
              <img
                src={connectivity}
                alt="connectivity"
                className="connectivity_maxw_550 w-100 xlposition_absolute bottom_neg24 phoneleft_neg"
              />
            </Col>
            <Col lg={7}>
              <div className="py-lg-5 py-4">
                <h5 className="ff_ExtraBold fw_700 fs_6xl clr_white mb-3 pb-xl-1 tracking_tighter">
                  Global IoT connectivity to
                  <span className="d-xl-block text_nowrap">
                    deploy and scale your solutions
                  </span>
                </h5>
                <p className="ff_Medium fw_500 fs_2sm clr_gray_100 mw_787 mb-xl-5 mb-3 pb-xl-3">
                  If you're serious about getting your IoT build off the ground
                  - Protecturo is ready to make it quick, frictionless and
                  smart. Get started today with a free SIM & data, or explore
                  enterprise options with our team of IoT experts.
                </p>
                <Btnred text="Get started" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Global;
