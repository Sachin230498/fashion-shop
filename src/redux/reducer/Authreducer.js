import {SIGNUP,LOGIN,LODING,ERROR} from "../actiontypes/Authactionstypes"
const intialState={
    singupMessage:"",
    isSeller:false,
    token:"",
    refreshtoken:"",
    isError:false,
    isloding:false,
    errormessage:"",
    message:""
}

export const Authreducer=(state=intialState,{type,paylode})=>{

    switch(type){
        case LOGIN : return {
            ...state,isAuth:true,token:paylode.token,refreshtoken:paylode.refresh,isloding:false,isError:false,errormessage:""
        }
        case LODING:return {
            ...state,isloding:true,errormessage:"",isError:false
        }
        case ERROR:return {
            ...state,isError:true,isloding:false,errormessage:paylode
        }
        case SIGNUP:return {
            ...state,message:"signup successful"
        }



        default:return state;
    }
}

