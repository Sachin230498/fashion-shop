import {
  GET_WOMENS_PRODUCTS,
  WOMENS_PRODUCTS_LOADING,
  ADD_WOMENS_PRODUCTS,
  WOMENS_PRODUCTS_ERROR,
} from "./actionTypes";
const intialState = { womens: [], loading: false, error: false };

export const womensReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_WOMENS_PRODUCTS: {
      return {
        ...state,
        womens: payload,
      };
    }
    default: {
      return state;
    }
  }
};
