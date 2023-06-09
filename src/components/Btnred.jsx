import React from "react";

const Btnred = (props) => {
  return (
    <>
      <button className="ff_motserrat fw_500 fs_sm clr_white btnred rounded-pill">
        {props.text}
      </button>
    </>
  );
};

export default Btnred;
