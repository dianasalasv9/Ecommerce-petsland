import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Thankyou } from "./components/Thankyou";

const App = () => {
  return (
    <>
        <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Welcome />} />
              <Route exact path="/catalogo" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/category/subcategory/:subcategory"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/thankyou" element={<Thankyou />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShoppingCartProvider>
    </>
  );
};

export default App;