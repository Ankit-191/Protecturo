import React from "react";
const Topbtn = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <button
            onClick={moveToTop}
            className="position-fixed topbtn bottom-0 end-0 me-4 mb-4 top_btn rounded-circle pointer"
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="31"
                stroke="red"
                stroke-width="2"
              />
              <path
                d="M28.9999 42.0001C28.7367 42.0016 28.4757 41.9512 28.2321 41.8516C27.9884 41.7521 27.7668 41.6055 27.5799 41.4201C27.3924 41.2342 27.2436 41.013 27.1421 40.7693C27.0406 40.5255 26.9883 40.2641 26.9883 40.0001C26.9883 39.7361 27.0406 39.4747 27.1421 39.2309C27.2436 38.9872 27.3924 38.766 27.5799 38.5801L34.1999 32.0001L27.8399 25.3801C27.4674 25.0054 27.2583 24.4985 27.2583 23.9701C27.2583 23.4417 27.4674 22.9348 27.8399 22.5601C28.0258 22.3726 28.247 22.2239 28.4907 22.1223C28.7344 22.0208 28.9959 21.9685 29.2599 21.9685C29.5239 21.9685 29.7853 22.0208 30.029 22.1223C30.2728 22.2239 30.494 22.3726 30.6799 22.5601L38.3999 30.5601C38.7663 30.934 38.9716 31.4366 38.9716 31.9601C38.9716 32.4836 38.7663 32.9862 38.3999 33.3601L30.3999 41.3601C30.2204 41.554 30.0042 41.7103 29.7639 41.8202C29.5236 41.93 29.2639 41.9912 28.9999 42.0001Z"
                fill="black"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
        <div></div>
      </div>
    </>
  );
};

export default Topbtn;
