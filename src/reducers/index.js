
import {combineReducers} from "redux"

import accountReducer from "./account"
import appReducer from "./app"

const rootReducer =combineReducers({
  account:accountReducer,
  app:appReducer
})

export default rootReducer
