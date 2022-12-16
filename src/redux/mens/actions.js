import axios from "axios";
import {
  GET_MENS_PRODUCTS,
  MENS_PRODUCTS_LOADING,
  ADD_MENS_PRODUCTS,
  MENS_PRODUCTS_ERROR,
} from "./actionTypes";
export const getMensAPI = () => async (dispatch) => {
  let response = await axios.get("http://localhost:8080/mens");
  //   let data = response.data;
  return dispatch({ type: GET_MENS_PRODUCTS, payload: response.data });
};
