import React, { useEffect, useState } from "react";
import logo from '../assets/svg/protecturo.svg'
setTimeout(() => {
  document.getElementById("none").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 3000);
const Preloder = () => {
  return (
    <>
      <div
        id="none"
        className="loading_back min-vh-100 w-100 position-fixed top-0 start-0 bg-black d-flex align-items-center justify-content-center"
      >
         <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Preloder;
