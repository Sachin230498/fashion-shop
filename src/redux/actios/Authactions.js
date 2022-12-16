import {SIGNUP,LOGIN,LODING,ERROR} from "../actiontypes/Authactionstypes"
import axios from "axios"

export const login=(creads)=>async (dispatch)=>{
    dispatch({type:LODING})
    try{
        let tokken =await axios.post("http://localhost:8080/users/login",{...creads})
        // localStorage.setItem("access_token",tokken.data.token)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
        creads.toast({
            title: "Login Successful",
            description: `welcome ! thanks for joing Zara`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              }
          })
        
        return dispatch({type:LOGIN,paylode:tokken.data})
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
export const signup=(creads)=>async (dispatch)=>{
    dispatch({type:LODING})
    try{
        await axios.post("http://localhost:8080/users/signup",{...creads})
        creads.toast({
            title: "SignUp Successful",
            description: `welcome ${creads.name} ! thanks for joing ABlogs`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top',
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              }
          })
        return dispatch({type:SIGNUP})
        
        
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