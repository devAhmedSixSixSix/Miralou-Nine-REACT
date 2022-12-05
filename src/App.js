import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import WishList from "./Pages/WishList";
import ShopingCart from "./Pages/ShopingCart";
import CloseCheckOut from "./Pages/CloseCheckOut";
import ProductPage from "./Pages/ProductPage";
import Navegantbar from "./Components/Navegantbar";
// import Footers from "./Components/Footers";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const allData = () => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    allData();
  }, []);

  const [cart, setCart] = useState([]);
  function addToCart(data) {
    const productExsist = cart.find((item) => item.id === data.id);
    if (productExsist) {
      setCart(
        cart.map((item) =>
          item.id === data.id
            ? { ...productExsist, quan: productExsist.quan + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...data, quan: 1 }]);
    }
  }

  function removeItemFromCart(data) {
    const productExsist = cart.find((item) => item.id === data.id);
    if (productExsist) {
      setCart(cart.filter((item) => item.id !== data.id));
    }
  }

  const [wishlist, setWishlist] = useState([]);
  function addToWishlist(data) {
    const productExsist = wishlist.find((item) => item.id === data.id);
    if (productExsist) {
      setWishlist(
        wishlist.map((item) =>
          item.id === data.id
            ? { ...productExsist, quan: productExsist.quan + 1 }
            : item
        )
      );
    } else {
      setWishlist([...wishlist, { ...data, quan: 1 }]);
    }
  }

  function removeItemFromWishlist(data) {
    const productExsist = wishlist.find((item) => item.id === data.id);
    if (productExsist) {
      setWishlist(wishlist.filter((item) => item.id !== data.id));
    }
  }

  return (
    <div className="App">
      <Navegantbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="shop" element={<Shop data={data} />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route
          path="shopingcart"
          element={
            <ShopingCart cart={cart} removeItemFromCart={removeItemFromCart} />
          }
        />
        <Route
          path="shopingcart/closecheckout"
          element={<CloseCheckOut cart={cart} />}
        />

        <Route
          path="wishlist"
          element={
            <WishList
              wishlist={wishlist}
              removeItemFromWishlist={removeItemFromWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="productpage/:id"
          element={
            <ProductPage
              data={data}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />
      </Routes>
      {/* <Footers /> */}
    </div>
  );
}

export default App;
