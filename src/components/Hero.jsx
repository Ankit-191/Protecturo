import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <div className="d-flex flex-column min_vh_100">
        <Header />
        <section className="bgimg_hero position-relative flex-grow-1 hero_h800 pt-lg-5 pt-4">
          <Container>
            <div className="redline m-auto rounded-pill mb-lg-4 mb-3"></div>
            <p className="ff_ExtraBold fw_700 fs_8xl clr_white_100 text-center lh_95">
              Cyber safety starts
              <span className="d-sm-block">here. For both commercial</span> and
              personal.
            </p>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Hero;
