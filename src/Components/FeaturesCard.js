import React from "react";

function FeaturesCard({ icon }) {
  return (
    <div className="py-5 text-center">
      {icon}
      <h2 className="text-success fw-light">Shipping</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default FeaturesCard;
