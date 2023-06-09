import React from "react";
import { Container } from "react-bootstrap";

const Stayconnect = () => {
  return (
    <>
      <section className="py-lg-5 py-4">
        <Container>
          <div className="bg_stayconnect py-lg-5 py-4 text-center stayshadow position-relative overflow-hidden">
            <p className="ff_Gilroy fw_700 fs_6xl clr_white mb-3 mt-lg-4">
              Stay connect wherever you go
            </p>
            <p className="ff_Gilroy fw_500 fs_2sm clr_gray_200 mb-0 mb-lg-5 mb-3">
              Buy an international eSIM card, stay connected wherever you go,
             <span className="d-md-block"> and avoid expensive phone bills.</span>
            </p>
            <button className="ff_motserrat fw_500 fs_sm clr_white btn_started border-0 rounded-pill mb-lg-3">Get started</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Stayconnect;
