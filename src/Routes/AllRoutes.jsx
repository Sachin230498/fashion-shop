import React from "react";
import { Route, Routes } from "react-router-dom";
//import { Search } from "./Search"
import { Home } from "./Home";
import Collections from "../pages/collections";
import Kids from "../pages/Kids";
import Mens from "../pages/mens";
import Womens from "../pages/womens";
import Sidebar from "../components/Sidebar";
import { Search } from "./Search";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/sidebar" element={<Sidebar />} />
      
    </Routes>
  );
};
