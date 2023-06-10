import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Btnred from "./Btnred";
import standards from "../assets/images/webp/ourstandards.webp";

const Standed = () => {
  return (
    <>
      <section className="py-4 py-lg-5 my-lg-4">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              sm={8}
              lg={6}
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
              <img
                src={standards}
                alt="standards"
                className="w-100 mb-4 mb-lg-0 pe-xl-4 pe-lg-2"
              />
            </Col>
            <Col lg={6} data-aos="zoom-out-left" data-aos-duration="1000">
              <p className="textred ff_ExtraBold fw_700 fs_2xl">
                Our standards
              </p>
              <h5 className="ff_ExtraBold fw_700 fs_6xl clr_gray_200 mw_787 mb-3 pb-xl-1 tracking_tighter">
                Privacy standards not seen before in telecom
              </h5>
              <p className="ff_Medium fw_500 fs_xl clr_gray_100 mw_787 mb-xl-4 mb-3 pb-xl-2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p className="ff_Medium fw_500 fs_xl clr_gray_100 mw_787 mb-xl-5 mb-3 pb-xl-2">
                Your personal information is 100% safe with us, because we do
                not require any personal information besides email. Of course no
                contracts, no credit checks and no fine prints. To protect your
                privacy online, our data plans come with a Privacy IP address.
              </p>
              <Btnred text="Get started" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Standed;
