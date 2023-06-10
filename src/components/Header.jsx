import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RiMenu4Fill } from "react-icons/ri";
import logo from "../assets/svg/protecturo.svg";
import Btnred from "./Btnred";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="py-lg-4">
        <Container>
          <div className="d-flex justify-content-between py-3">
            <img
              src={logo}
              alt="logo"
              className="logo_w_250 smlogo_w_150 logo_h_74"
            />
            <div onClick={showUl} className="z_30">
              <span className="d-block d-lg-none fs_3xl text-white">
                <RiMenu4Fill />
              </span>
            </div>
            <div
              className={`d-flex justify-content-center align-items-center phone ${
                head ? "" : "left_0 text-center"
              }`}
              onClick={() => sethead(true)}
            >
              <ul className="d-flex m-0 align-items-center p-0 gap_40 gap_20 flex-column flex-lg-row headhover">
                <li>
                  <a href="#" className="ff_Medium fw_600 fs_xl clr_gray">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_Medium fw_600 fs_xl clr_gray">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_Medium fw_600 fs_xl clr_gray">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_Medium fw_600 fs_xl clr_gray">
                    App
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_Medium fw_600 fs_xl clr_gray">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="ff_Medium fw_600 fs_xl clr_gray">
                    FAQs
                  </a>
                </li>
                <li className="ms-xl-4">
                  <Btnred text="Get started" />
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
