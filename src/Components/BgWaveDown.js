import React from "react";
import bg from "../Assest/Backgrounds/waveDown.png";

function BgWaveDown() {
  const bgImg = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "150vh",
  };
  return <div style={bgImg}></div>;
}

export default BgWaveDown;
