
import {combineReducers} from "redux"
import dishReducer from "./dish"
import accountReducer from "./account"
import appReducer from "./app"
import cartReducer from "./cart"

const rootReducer =combineReducers({
  account:accountReducer,
  app:appReducer,
  dish:dishReducer,
  cart:cartReducer

})

export default rootReducer
