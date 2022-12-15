import React from "react"
import { Route, Routes } from "react-router-dom"
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

    {/* <Route path="/search"  element={<Search/>}/> */}
</Routes>
}