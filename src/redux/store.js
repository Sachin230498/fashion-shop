import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";
import {AdminAuthReducer} from "./reducer/Authreducer";
import { ShopReducer } from "./reducer/shopReducer";
                    
const rootReducer = combineReducers({
  productReducer,
  admin:AdminAuthReducer,
  shop:ShopReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
