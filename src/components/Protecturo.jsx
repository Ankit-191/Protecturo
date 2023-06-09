import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import productbenefits from "../assets/images/webp/productbenefits.webp";
import stay from "../assets/svg/stay.svg";
import international from "../assets/svg/international.svg";
import ease from "../assets/svg/ease.svg";
import data from "../assets/svg/data.svg";
const Protecturo = () => {
  const Ourproductbenefits = [
    {
      id: 1,
      img: stay,
      hading: "Stay connected",
      para: "Travel and stay connected without roaming or surprise bills.",
    },
    {
      id: 2,
      img: international,
      hading: "International",
      para: "Keep your local SIM card to receive all phone calls everywhere.",
    },
    {
      id: 3,
      img: ease,
      hading: "Ease to get",
      para: "Purchase and install your eSIM in just one minute.",
    },
    {
      id: 4,
      img: data,
      hading: "Data plans",
      para: "Keep your local SIM card to receive all phone calls everywhere.",
    },
  ];
  return (
    <>
      <section className="py-lg-5 py-4 my-xl-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6}>
              <p className="textred ff_Gilroy fw_700 fs_2xl">
                Our product benefits
              </p>
              <h5 className="ff_Gilroy fw_700 fs_6xl clr_gray_200 mb-3">
                What you will
                <span className="d-block">get with Protecturo</span>
              </h5>
              <p className="ff_Gilroy fw_500 fs_2sm clr_gray_100 mw_787 mb-xl-5 mb-2">
                Your creativity is endless. Your IoT project shouldn't be held
                back by cellular connectivity. Let's build a new unicorn
                together.
              </p>
              <Row className="mb-4 mb-lg-0">
                {Ourproductbenefits.map((card) => {
                  return (
                    <Col sm={6} key={card.id} className="mt-3">
                      <div className="mw_286">
                        <img src={card.img} alt="stay" />
                        <h5 className="ff_Gilroy fw_600 fs_2xl clr_gray_200 mt-lg-4 mt-3">
                          {card.hading}
                        </h5>
                        <p className="ff_Gilroy fw_500 fs_sm clr_gray_100 mb-0">
                          {card.para}
                        </p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col sm={7} lg={6}>
              <img
                src={productbenefits}
                alt="Product Benefits"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Protecturo;
