import {
  GET_COLLECTIONS,
  COLLECTIONS_LOADING,
  ADD_COLLECTIONS,
  COLLECTIONS_ERROR,
} from "./collection.types";

const intialState = { collections: [], loading: false, error: false };

export const collectionReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_COLLECTIONS: {
      return {
        ...state,
        collections: payload,
      };
    }
    default: {
      return state;
    }
  }
};
