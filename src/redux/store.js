import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { kidsReducer } from "./kids/kids.reducer";
import { collectionReducer } from "./collections/collection.reducer";
import { mensReducer } from "./mens/reducer";
import { womensReducer } from "./womens/reducer";
import {AdminAuthReducer} from "./reducer/Authreducer";
import { ShopReducer } from "./reducer/shopReducer";
const rootReducer = combineReducers({
  kids: kidsReducer,
  collection: collectionReducer,
  mens: mensReducer,
  womens: womensReducer,
  admin:AdminAuthReducer,
  shop:ShopReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
