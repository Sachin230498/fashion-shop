
// import React from "react"
// import { Route, Routes } from "react-router-dom"

// //import { Search } from "./Search"
// import { Home } from "./Home"
// // import { Account } from "./Account"
// // import { Cart } from "./Cart"
// // import { Checkout } from "./Checkout"
// // import { Kids } from "./Kids"
// // import { Login } from "./Login"
// // import { Men } from "./Men"
// // import { ProductsDetail } from "./ProductsDetail"
// // import { Signup } from "./Signup"
// // import { Women } from "./Women"


// // import login from "../Routes/LogIn";
// import AddProduct from "../Components/admin/addproduct"
// import AddShop from "../Components/admin/AddShop"

// import LoginSignup from "../Components/admin/LoginSignup"
// import Seller from "../pages/Seller"
// import { Login } from "../Routes/LogIn";
// // import { login } from "../redux/Auth/action";
// //import { Search } from "./Search"
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
// import { Signup } from "./Signup"
// import { Account } from "./Accounts"

// export const AllRoutes = () => {
//   return (
//     <Routes>
//         <Route path="/seller" element={<><Seller/></>} />
//       <Route path="/seller/login" element={<><LoginSignup/></>} />
//       <Route path="/seller/addshop" element={<><AddShop/></>} />
//       <Route path="/seller/addproduct" element={<AddProduct/>} />
//       <Route path="/" element={<Home />} />
//       <Route path="/search" element={<Search />} />
//       <Route path="/kids" element={<Kids />} />
//       <Route path="/kids/:id" element={<SingleK />} />
//       <Route path="/Collections" element={<Collections />} />
//       <Route path="/collections/:id" element={<SingleC/>}/>
//       <Route path="/mens" element={<Mens />} />
//       <Route path="/mens/:id" element={<SingleM/>}/>
//       <Route path="/womens" element={<Womens />} />
//       <Route path="/womens/:id" element={<SingleW/>}/>
//       <Route path='/company' element={<Companylogin/>}></Route>
//       <Route path='/LogIn' element={<Login />} />
//       <Route path="/sidebar" element={<Sidebar />} />
//       <Route path="/register"  element={<Signup/>}/>
//       <Route path="/account"  element={<Account/>}/>

//     </Routes>
//   );
// }
// import login from "../Routes/LogIn";

import AddProduct from "../components/admin/addproduct"
import AddShop from "../components/admin/AddShop"

import LoginSignup from "../components/admin/LoginSignup"
import Seller from "../pages/Seller"
import { Login } from "../Routes/LogIn";
// import { login } from "../redux/Auth/action";
//import { Search } from "./Search"
import Collections from "../pages/collections";
import Kids from "../pages/Kids";
import Mens from "../pages/mens";
import Womens from "../pages/womens";
import SingleK from "../pages/SingleK";
import Sidebar from "../components/Sidebar";
import Companylogin from "./Company";
import SingleW from "../pages/SingleW";
import SingleC from "../pages/SingleC";
import SingleM from "../pages/SingleM";
import { Search } from "./Search";
import { Signup } from "./Signup"
import { Account } from "./Accounts"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/seller" element={<><Seller/></>} />
      <Route path="/seller/login" element={<><LoginSignup/></>} />
      <Route path="/seller/addshop" element={<><AddShop/></>} />
      <Route path="/seller/addproduct" element={<AddProduct/>} />
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
      <Route path="/register"  element={<Signup/>}/>
      <Route path="/account"  element={<Account/>}/>

    </Routes>
  );
};


