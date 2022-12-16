import axios from "axios";
import { GET_COLLECTIONS } from "./collection.types";
export const getCollectionsAPI = () => async (dispatch) => {
  let response = await axios.get("http://localhost:8080/collections");
  //   let data = response.data;
  return dispatch({ type: GET_COLLECTIONS, payload: response.data });
};
