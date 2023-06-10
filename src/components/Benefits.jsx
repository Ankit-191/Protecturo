import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import getstarted from "../assets/svg/started.svg";
import manage from "../assets/svg/manage.svg";
import global from "../assets/svg/global.svg";
import scale from "../assets/svg/manage.svg";
import Slider from "react-slick";

const Benefits = () => {
  const Ourbenefits = [
    {
      id: 1,
      img: getstarted,
      hading: "Get started with IoT",
      para: "Our experts helps you find the most suitable carrier profile for your deployment.",
    },
    {
      id: 2,
      img: manage,
      hading: "Manage connectivity",
      para: "Control all of your IoT SIM cards on a single platform.",
    },
    {
      id: 3,
      img: global,
      hading: "One global solution",
      para: "You will receive 1 invoice and have a single point of contact for support no matter where the SIMs are deployed.",
    },
    {
      id: 4,
      img: scale,
      hading: "Scale infinitely with ease",
      para: "Reach all business goals with a single connectivity partner.",
    },
  ];
  var Benefits = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5" data-aos="fade-up">
        <Container>
          <div
            className="d-flex flex-column align-items-center text-center"
            
          >
            <p className="textred ff_Gilroy fw_700 fs_2xl">Our benefits</p>
            <h5 className="ff_Gilroy fw_700 fs_6xl clr_white mw_787 mb-3 pb-xl-1">
              Take control of your cellular connectivity
            </h5>
            <p className="ff_Gilroy fw_500 fs_2sm clr_gray_100 mw_787 mb-lg-5 mb-4">
              Your creativity is endless. Your IoT project shouldn't be held
              back by cellular connectivity. Let's build a new unicorn together.
            </p>
          </div>
          <Slider {...Benefits} className="mt-3 pt-1">
            {Ourbenefits.map((card) => {
              return (
                <div
                  key={card.id}
                  className="p-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="benefits_card h-100 py-md-5 py-4 px-md-4 px-2 d-flex flex-column text-center align-items-center justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                      <img
                        src={card.img}
                        alt="getstarted"
                        style={{ width: 136, height: 132 }}
                      />
                      <p className="ff_Gilroy fw_600 fs_2xl clr_white mt-4 pt-md-1 mb-2">
                        {card.hading}
                      </p>
                      <p className="ff_Gilroy fw_500 fs_sm clr_gray_100 mb-4 pb-1">
                        {card.para}
                      </p>
                    </div>
                    <div className="card_line"></div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Benefits;
