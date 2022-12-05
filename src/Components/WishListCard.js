import React from "react";
import Button from "react-bootstrap/esm/Button";

function WishListCard({ wishlist, addToCart, removeItemFromWishlist }) {
  return (
    <div>
      {wishlist &&
        wishlist.map((ele, index) => (
          <div
            className=" p-3 border m-2 rounded d-flex align-items-center"
            key={index}
          >
            <img
              src={ele.image}
              alt="test"
              style={{
                width: "200px",
                height: "200px",
              }}
              className="me-3"
            />
            <div class>
              <h5>{ele.title}</h5>
              <h5>{ele.price}$</h5>
              <h5>Quanty: {ele.quan}</h5>
              <h4>IN STOUCK</h4>
              <Button
                onClick={() => {
                  addToCart(ele);
                  removeItemFromWishlist(ele);
                }}
                variant="success"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WishListCard;
