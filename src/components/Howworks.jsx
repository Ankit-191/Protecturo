import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import check from "../assets/svg/check.svg";
import buy from "../assets/svg/shoppingcart.svg";
import qrcode from "../assets/svg/qrcode.svg";
const Howworks = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <p className="textred ff_ExtraBold fw_700 fs_2xl text-center">
            How it works
          </p>
          <h5 className="ff_ExtraBold fw_700 fs_6xl clr_gray_200 mb-lg-5 text-center">
            Learn how does
            <span className="d-block">international eSIM work.</span>
          </h5>
          <Row className="justify-content-evenly">
            <Col lg={2}>
              <div className="text-center pt-lg-5 mt-4 check position-relative">
                <img src={check} alt="check" />
                <h4 className="ff_ExtraBold fw_700 fs_3xl clr_gray_200 mb-2 mt-3 pt-1">
                  Check
                </h4>
                <p className="ff_Medium fw_500 fs_sm clr_gray_100 mb-0">
                  that your smartphone <br /> supports eSIM
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="text-center shoping mt-lg-0 mt-4 position-relative">
                <img src={buy} alt="shoppingcart" />
                <h4 className="ff_ExtraBold fw_700 fs_3xl clr_gray_200 mb-2 mt-3 pt-1">
                  Buy
                </h4>
                <p className="ff_Medium fw_500 fs_sm clr_gray_100 mb-0">
                  Your eSIM card to travel
                </p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="text-center pt-lg-5 mt-4 qrline position-relative">
                <img src={qrcode} alt="qrcode" />
                <h4 className="ff_ExtraBold fw_700 fs_3xl clr_gray_200 mb-2 mt-3 pt-1">
                  Install the QR
                </h4>
                <p className="ff_Gilroy fw_500 fs_sm clr_gray_100 mb-0">
                  and configure it. Activate <br /> it just before your leave
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Howworks;
