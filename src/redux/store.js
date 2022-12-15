import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Authreducer} from "./reducer/Authreducer"
let rootreducer =combineReducers({
    auth:Authreducer,
})

export const store =legacy_createStore(rootreducer,applyMiddleware(thunk));