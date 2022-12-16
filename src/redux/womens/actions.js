import axios from "axios";
import {
  GET_WOMENS_PRODUCTS,
  WOMENS_PRODUCTS_LOADING,
  ADD_WOMENS_PRODUCTS,
  WOMENS_PRODUCTS_ERROR,
} from "./actionTypes";
export const getWomensAPI = () => async (dispatch) => {
  let response = await axios.get("http://localhost:8080/womens");
  //   let data = response.data;
  return dispatch({ type: GET_WOMENS_PRODUCTS, payload: response.data });
};
