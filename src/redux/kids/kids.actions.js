import axios from "axios";
import {
  GET_KIDS_PRODUCTS,
  KIDS_PRODUCTS_LOADING,
  ADD_KIDS_PRODUCTS,
  KIDS_PRODUCTS_ERROR,
} from "./kids.types";
export const getKidsAPI = () => async (dispatch) => {
  let response = await axios.get("http://localhost:8080/kids");
  //   let data = response.data;
  return dispatch({ type: GET_KIDS_PRODUCTS, payload: response.data });
};
