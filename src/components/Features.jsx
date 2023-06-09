import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import stay from "../assets/svg/stay.svg";
import international from "../assets/svg/international.svg";
import ease from "../assets/svg/ease.svg";
import data from "../assets/svg/data.svg";
import Slider from "react-slick";
const Features = () => {
  const Ourproducts = [
    {
      id: 1,
      img: stay,
      hading: "Protect your data",
      para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
    },
    {
      id: 2,
      img: international,
      hading: "Detect Incidents",
      para: "At vero eos et accusamus et iusto odio dign era sue issimos ducimus qui blanditiis praesentium vol uptatum deleniti atque corrupti.",
    },
    {
      id: 3,
      img: ease,
      hading: "Security shield",
      para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
    },
    {
      id: 4,
      img: ease,
      hading: "Unlimited data",
      para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
    },
  ];
  const Ourproducts1 = [
    {
      id: 5,
      img: stay,
      hading: "Protect your data",
      para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
    },
    {
      id: 6,
      img: data,
      hading: "Detect Incidents",
      para: "At vero eos et accusamus et iusto odio dign era sue issimos ducimus qui blanditiis praesentium vol uptatum deleniti atque corrupti.",
    },
    {
      id: 7,
      img: stay,
      hading: "Security shield",
      para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
    },
    {
      id: 8,
      img: international,
      hading: "Unlimited data",
      para: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea",
    },
  ];
  var Ourproduct = {
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
      <section className="py-4 py-lg-5">
        <Container className="position-relative features_shadow">
          <p className="textred ff_Gilroy fw_700 fs_2xl text-center">
            Features
          </p>
          <h5 className="ff_Gilroy fw_700 fs_6xl clr_gray_200 mb-lg-5 text-center">
            Best-in-class Cyber safety
            <span className="d-sm-block">for commercial and personal.</span>
          </h5>
          <Slider {...Ourproduct} className="mt-lg-4 mt-2 pt-lg-1">
            {Ourproducts.map((card) => {
              return (
                <div sm={3} key={card.id} className="p-2">
                  <div className="benefits_card rounded-0 h-100 py-lg-5 py-4 px-lg-4 px-3">
                    <div className="px-lg-3">
                      <img
                        src={card.img}
                        alt="icon"
                        style={{ width: 65, height: 65 }}
                      />
                      <p className="ff_Gilroy fw_600 fs_2xl clr_gray mt-lg-4 mb-2 pt-3 pb-lg-1">
                        {card.hading}
                      </p>
                      <p className="ff_Gilroy fw_500 fs_sm clr_gray_100 mb-0">
                        {card.para}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider {...Ourproduct} className="mt-lg-4 mt-0 pt-lg-1">
            {Ourproducts1.map((card) => {
              return (
                <div sm={3} key={card.id} className="p-2">
                  <div className="benefits_card rounded-0 h-100 py-lg-5 py-4 px-lg-4 px-3">
                    <div className="px-3">
                      <img
                        src={card.img}
                        alt="icon"
                        style={{ width: 65, height: 65 }}
                      />
                      <p className="ff_Gilroy fw_600 fs_2xl clr_gray mt-lg-4 mb-2 pt-3 pb-lg-1">
                        {card.hading}
                      </p>
                      <p className="ff_Gilroy fw_500 fs_sm clr_gray_100 mb-0">
                        {card.para}
                      </p>
                    </div>
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

export default Features;
