import React from "react";
import { Route, Routes } from "react-router-dom";
//import { Search } from "./Search"
import { Home } from "./Home";
import Collections from "../pages/Collections";
import Kids from "../pages/Kids";
import Mens from "../pages/Mens";
import Womens from "../pages/Womens";
import Sidebar from "../components/Sidebar";
import SingleK from "../pages/SingleK";
// import { Account } from "./Account"
// import { Cart } from "./Cart"
// import { Checkout } from "./Checkout"
// import { Kids } from "./Kids"
// import { Login } from "./Login"
// import { Men } from "./Men"
// import { ProductsDetail } from "./ProductsDetail"
// import { Signup } from "./Signup"
// import { Women } from "./Women"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/kids/:id" element={<SingleK />} />
      <Route path="/collections" element={<Collections />} />
      {/* <Route path="/collections/:id" element={<Collections />} /> */}
      <Route path="/mens" element={<Mens />} />
      {/* <Route path="/mens/:id" element={<Mens />} /> */}
      <Route path="/womens" element={<Womens />} />
      {/* <Route path="/womens/:id" element={<Womens />} /> */}
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  );
};
