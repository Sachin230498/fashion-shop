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
import SingleK from "../pages/SingleK";
import Sidebar from "../components/Sidebar";
import Companylogin from "./Company";
import SignIn from "./SignIn";
import SingleW from "../pages/SingleW";
import SingleC from "../pages/SingleC";
import SingleM from "../pages/SingleM";
import { Search } from "./Search";
import { Signup } from "./Signup"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/kids/:id" element={<SingleK />} />
      <Route path="/Collections" element={<Collections />} />
      <Route path="/collections/:id" element={<SingleC/>}/>
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<SingleM/>}/>
      <Route path="/womens" element={<Womens />} />
      <Route path="/womens/:id" element={<SingleW/>}/>
      <Route path='/company' element={<Companylogin/>}></Route>
      <Route path='/LogIn' element={<Login />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/register" element={<SignIn />} />
      {/* <Route path="/register"  element={<Signup/>}/> */}

      

    </Routes>
  );
};
