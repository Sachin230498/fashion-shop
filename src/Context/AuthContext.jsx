import React, { useReducer } from "react"
import { createContext } from "react"
import { Reducer } from "./Reducer"

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const init={
        isAuth:false,
        cartData:[],
        cartCount:0,
        email:"",
        password:"",
        user:""
    }
    const [state,dispatch]=useReducer(Reducer,init)
    return <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
}