import React from "react";

function ProductPageGallery({ alldata }) {
  return (
    <div className="d-flex justify-content-center">
      <img src={alldata && alldata.image} alt="test" className="w-50" />
    </div>
  );
}

export default ProductPageGallery;
