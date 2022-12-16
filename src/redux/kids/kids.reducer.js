import {
  GET_KIDS_PRODUCTS,
  KIDS_PRODUCTS_LOADING,
  ADD_KIDS_PRODUCTS,
  KIDS_PRODUCTS_ERROR,
} from "./kids.types";
const intialState = { kids: [], loading: false, error: false };

export const kidsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_KIDS_PRODUCTS: {
      return {
        ...state,
        kids: payload,
      };
    }
    default: {
      return state;
    }
  }
};
