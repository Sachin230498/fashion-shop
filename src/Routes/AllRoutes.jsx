import React from "react"
import { Route, Routes } from "react-router-dom"
import AddProduct from "../Components/admin/addproduct"
import AddShop from "../Components/admin/AddShop"
import Login from "../Components/admin/Login"
import LoginSignup from "../Components/admin/LoginSignup"
import Seller from "../pages/Seller"
//import { Search } from "./Search"
import { Home } from "./Home"
// import { Account } from "./Account"
// import { Cart } from "./Cart"
// import { Checkout } from "./Checkout"
// import { Kids } from "./Kids"
// import { Login } from "./Login"
// import { Men } from "./Men"
// import { ProductsDetail } from "./ProductsDetail"
// import { Signup } from "./Signup"
// import { Women } from "./Women"

export const AllRoutes=()=>{
return  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/seller" element={<><Seller/></>} />
    <Route path="/seller/login" element={<><LoginSignup/></>} />
    <Route path="/seller/addshop" element={<><AddShop/></>} />
    <Route path="/seller/addproduct" element={<AddProduct/>} />

    {/* <Route path="/search"  element={<Search/>}/> */}
</Routes>
}