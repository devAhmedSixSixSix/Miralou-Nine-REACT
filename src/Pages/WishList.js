import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Empty from "../Components/Empty";
import WishListCard from "../Components/WishListCard";

function WishList({ wishlist, addToCart, removeItemFromWishlist }) {
  return (
    <div className="py-5 my-5">
      <Container>
        <Row>
          <Col>
            {wishlist.length > 0 ? (
              <WishListCard
                wishlist={wishlist}
                addToCart={addToCart}
                removeItemFromWishlist={removeItemFromWishlist}
              />
            ) : (
              <Empty title="Wishlist" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WishList;
