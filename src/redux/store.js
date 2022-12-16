import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { kidsReducer } from "./kids/kids.reducer";
import { collectionReducer } from "./collections/collection.reducer";

const rootReducer = combineReducers({
  kids: kidsReducer,
  collection: collectionReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
