import React from "react";

function SummreyCard({ cart }) {
  const priseArr = [0];
  const extractPrises =
    cart && cart.map((ele) => priseArr.push(ele.price * ele.quan));
  const suptotal = priseArr.reduce((prev, next) => prev + next);

  return (
    <div>
      <div className="border rounded p-5">
        <h4>Cart Total:</h4>
        <hr />
        <div className="d-flex justify-content-between">
          <h6>subtotals:</h6>
          <h6>{suptotal}$</h6>
        </div>
        <hr />
        <div>
          <h4>Shiping Total</h4>
          <hr />

          <p>Flat Rate: 20$</p>
          <p>Were To: UK</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h4>Total:</h4>
          <h4>{cart.length <= 0 ? 0 : suptotal + 20}$</h4>
        </div>
      </div>
    </div>
  );
}

export default SummreyCard;
