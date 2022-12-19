import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import Adminhome from '../Components/admin/adminhome'
import { Findshop } from '../redux/actios/shopAction'

function Seller() {
   let store=useSelector((store)=>store.admin)
   let shopStore=useSelector((store)=>store.shop)
   let dispatch=useDispatch()
   useEffect(()=>{
      dispatch(Findshop())
   },[])
   if(!store.isSeller){
    return(
        <Navigate to={"/seller/login"} />
    )
   }

  return (
    <div>
      <Adminhome userinfo={store} shopinfo={shopStore}/>
    </div>
  )
}

export default Seller