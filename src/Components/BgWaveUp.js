import React from "react";
import bg from "../Assest/Backgrounds/wave.png";

function BgWaveUp() {
  const bgImg = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "70vh",
  };
  return <div style={bgImg}></div>;
}

export default BgWaveUp;
