import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import simcard from "../assets/svg/simcard.svg";
import esim from "../assets/svg/esim.svg";
import wifihotsport from "../assets/svg/mobilehotspot.svg";
import Btnred from "./Btnred";
const Ourproducts = () => {
  const Ourproducts = [
    {
      id: 1,
      img: simcard,
      hading: "SIM card",
      para: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
    {
      id: 2,
      img: esim,
      hading: "eSIM",
      para: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
    {
      id: 3,
      img: wifihotsport,
      hading: "Mobile Wifi Hotspot",
      para: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
  ];
  return (
    <>
      <section className="py-4 py-lg-5 position-relative ourproducts_shadow">
        <Container>
          <div className="d-flex flex-column align-items-center text-center">
            <p className="textred ff_Gilroy fw_700 fs_2xl">Our products</p>
            <h5 className="ff_Gilroy fw_700 fs_6xl clr_gray_200 mb-lg-5 mb-2">
              Allow us to secure your data
              <span className="d-lg-block"> with Protecturo’s products</span>
            </h5>
          </div>
          <Row className="mt-lg-3 justify-content-center">
            {Ourproducts.map((card) => {
              return (
                <Col md={6} lg={4} xxl={3} key={card.id} className="mt-3">
                  <div className="benefits_card h-100 py-md-5 py-4 px-md-4 px-2 d-flex flex-column text-center align-items-center justify-content-between">
                    <div className="px-2">
                      <img
                        src={card.img}
                        alt="getstarted"
                        style={{ width: 138, height: 138 }}
                      />
                      <p className="ff_Gilroy fw_600 fs_2xl clr_gray mt-md-4 pt-3">
                        {card.hading}
                      </p>
                      <p className="ff_Gilroy fw_500 fs_sm clr_gray_100 mb-md-4 mb-3 pb-1">
                        {card.para}
                      </p>
                    </div>
                    <div>
                      <Btnred text="Learn more" />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Ourproducts;
