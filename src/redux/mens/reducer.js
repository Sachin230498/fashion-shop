import {
  GET_MENS_PRODUCTS,
  MENS_PRODUCTS_LOADING,
  ADD_MENS_PRODUCTS,
  MENS_PRODUCTS_ERROR,
} from "./actionTypes";
const intialState = { mens: [], loading: false, error: false };

export const mensReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_MENS_PRODUCTS: {
      return {
        ...state,
        mens: payload,
      };
    }
    default: {
      return state;
    }
  }
};
