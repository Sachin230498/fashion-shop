import {GETSHOP,ERROR,LODING,SHOPNOTFOUND,CREATESHOP} from "../actiontypes/shopActionTypes"

const intialState={
   isShop:false,
   shopdata:{},
   iserror:false,
   islodding:false,
   createShop:false
};
const init=JSON.parse(localStorage.getItem("shopinfo"))||intialState
export const ShopReducer=(state=init,{type,paylode})=>{
console.log(state,paylode)
  switch(type){
    case GETSHOP:
      localStorage.setItem("shopinfo",JSON.stringify({...state,isShop:true,shopdata:{...paylode},iserror:false,islodding:false,createShop:false}))  
    return {
       ...state,isShop:true,shopdata:{...paylode},iserror:false,islodding:false,createShop:false
    }
    case SHOPNOTFOUND:return {
      ...state,isShop:false,iserror:false,islodding:false,createShop:true
    }
    case LODING:return{
    ...state,islodding:true
    }
    case ERROR:return {
      ...state,iserror:true,islodding:false
    }
    case CREATESHOP:return {
    ...state,isShop:false,iserror:false,islodding:false,createShop:false
    }

    default  :return state
  }
}