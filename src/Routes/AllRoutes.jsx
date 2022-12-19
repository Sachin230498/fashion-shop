// import AddProduct from "../components/admin/addproduct"
// import AddShop from "../components/admin/AddShop"
// import LoginSignup from "../components/admin/LoginSignup"
// import Seller from "../pages/Seller"
// import { Login } from "../Routes/LogIn";
// import Collections from "../pages/collections";
// import Kids from "../pages/Kids";
// import Mens from "../pages/mens";
// import Womens from "../pages/womens";
// import SingleK from "../pages/SingleK";
// import Sidebar from "../components/Sidebar";
// import Companylogin from "./Company";
// import SingleW from "../pages/SingleW";
// import SingleC from "../pages/SingleC";
// import SingleM from "../pages/SingleM";
// import { Search } from "./Search";

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Account } from "./Account";
import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import { Home } from "./Home";
import { Kids } from "./Kids";
import { Login } from "./LogIn";
import { Men } from "./Men";
import { Products } from "./Products";
import { Search } from "./Search";
import { Signup } from "./Signup";
import { Women } from "./Women";
import AddProduct from "../components/admin/addproduct";
import AddShop from "../components/admin/AddShop";
import LoginSignup from "../components/admin/LoginSignup";
import Seller from "../pages/Seller";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/help" element={<Login />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/account" element={<Account />} />
      <Route
        path="/seller"
        element={
          <>
            <Seller />
          </>
        }
      />
      <Route
        path="/seller/login"
        element={
          <>
            <LoginSignup />
          </>
        }
      />
      <Route
        path="/seller/addshop"
        element={
          <>
            <AddShop />
          </>
        }
      />
      <Route path="/seller/addproduct" element={<AddProduct />} />
    </Routes>
  );
};
