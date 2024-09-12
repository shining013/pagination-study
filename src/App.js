import React from "react";
import { Route, Routes } from "react-router";
import LayoutComp from "./layout/LayoutComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/products" element={<ProductComp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
