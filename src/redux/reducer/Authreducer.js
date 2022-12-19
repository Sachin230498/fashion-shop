import {
  SIGNUP,
  LOGIN,
  LODING,
  ERROR,
  LOGOUT,
} from "../actiontypes/Authactionstypes";
const intialState = {
  singupMessage: "",
  isSeller: false,
  token: "",
  refreshtoken: "",
  isError: false,
  isloding: false,
  errormessage: "",
  message: "",
};

const init = JSON.parse(localStorage.getItem("sellerinfo")) || intialState;

export const AdminAuthReducer = (state = init, { type, paylode }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem(
        "sellerinfo",
        JSON.stringify({
          ...state,
          isAuth: true,
          token: paylode.token,
          refreshtoken: paylode.refresh,
          isloding: false,
          isError: false,
          errormessage: "",
          isSeller: true,
        })
      );
      return {
        ...state,
        isAuth: true,
        token: paylode.token,
        refreshtoken: paylode.refresh,
        isloding: false,
        isError: false,
        errormessage: "",
        isSeller: true,
      };
    case LODING:
      return {
        ...state,
        isloding: true,
        errormessage: "",
        isError: false,
      };
    case ERROR:
      return {
        ...state,
        isError: true,
        isloding: false,
        errormessage: paylode,
      };
    case SIGNUP:
      return {
        ...state,
        message: "signup successful",
      };
    case LOGOUT:
      localStorage.setItem("sellerinfo", JSON.stringify(intialState));
      return intialState;

    default:
      return state;
  }
};
