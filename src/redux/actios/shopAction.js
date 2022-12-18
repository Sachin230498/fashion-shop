import axios from "axios"
import {GETSHOP,LODING,ERROR,SHOPNOTFOUND,CREATESHOP} from "../actiontypes/shopActionTypes"

export const Findshop=(creads)=>async (dispatch)=>{
    dispatch({type:LODING})
    try{
        let user=JSON.parse(localStorage.getItem("sellerinfo"))
        axios.defaults.headers.common['Authorization'] = user.token ;
       let shop= await axios.get("http://localhost:8080/shop/myshop",{
			headers: {
				'Authorization':user.token 
			}
		})
        
        return dispatch({type:GETSHOP,paylode:shop.data})
        
        
    }catch(e){
        
        return dispatch({type:SHOPNOTFOUND})
        
    }
}

export const addshop=(creads)=>async (dispatch)=>{
    dispatch({type:LODING})
    try{
        
        await axios.post("http://localhost:8080/shop/register",{...creads})
        creads.toast({
            title: "Shop Created Successfully",
            description: `welcome ${creads.name} ! thanks for joing Zara`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              }
          })
          creads.navigate("/seller")
        return dispatch({type:CREATESHOP})
        
        
    }catch(e){
        creads.toast({
            title: e.message,
            description: e.response.data,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              }
          })
        return dispatch({type:ERROR,paylode:e.response.data})

        
    }
}

export const addProduct =(creads)=>async (dispatch)=>{
    try{
        dispatch({type:LODING})
        let user=JSON.parse(localStorage.getItem("sellerinfo"))
        axios.defaults.headers.common['Authorization'] = user.token ;
        console.log(user)
        await axios.post(`http://localhost:8080/shop/${creads.id}/addproduct`,
        {headers: {
            'Authorization':user.token 
        },...creads})
        let shop= await axios.get("http://localhost:8080/shop/myshop")
        creads.toast({
            title: "Product is listed !",
            description: "You can check the shop for more info",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              }
          })
        
        return dispatch({type:GETSHOP,paylode:shop.data})
       

    }catch(e){
        creads.toast({
            title: e.message,
            description: e.response.data,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              }
          })

    }
}