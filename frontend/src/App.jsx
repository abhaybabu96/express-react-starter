// // import React from 'react'
// import Home from "./pages/Home";

// function App() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsAll from "./pages/ProductsAll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ColectionProducts from "./components/CollectionProducts";
import Productdetail from "./components/Productdetail";
import CartItem from "./components/CartItem";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsAll />} />
        <Route path="/collection/:id" element={<ColectionProducts />} />
        <Route path="/product/:pid" element={<Productdetail />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
