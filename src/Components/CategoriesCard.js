import React from "react";

function CategoriesCard({ title, numProduct, img }) {
  const bgcat = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "33.33333%",
    height: "100vh",
  };

  const overlay = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
  };

  return (
    <div style={bgcat} className="text-end p-0">
      <div style={overlay} className="p-4">
        <h4 className="text-warning fw-light">{title}</h4>
        <h6 className="text-success">{numProduct}</h6>
      </div>
    </div>
  );
}

export default CategoriesCard;
