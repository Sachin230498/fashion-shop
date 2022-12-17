// import login from "../Routes/LogIn";
import { Login } from "../Routes/LogIn";
// import { login } from "../redux/Auth/action";
import React from "react";
import { Route, Routes } from "react-router-dom";
//import { Search } from "./Search"
import { Home } from "./Home";
import Collections from "../pages/collections";
import Kids from "../pages/Kids";
import Mens from "../pages/mens";
import Womens from "../pages/womens";
import Sidebar from "../Components/Sidebar";
import Companylogin from "./Company";
// import { Account } from "./Account"
// import { Cart } from "./Cart"
// import { Checkout } from "./Checkout"
// import { Kids } from "./Kids"
   
 import SignIn from "./SignIn";
// import { Men } from "./Men"
// import { ProductsDetail } from "./ProductsDetail"
// import { Signup } from "./Signup"
// import { Women } from "./Women"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/Collections" element={<Collections />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path='/company' element={<Companylogin/>}></Route>
      <Route path='/LogIn' element={<Login />} />
      <Route path="/sidebar" element={<Sidebar />} />
      {/* <Route path="/LogIn" element={<LogIn />} /> */}
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
};
