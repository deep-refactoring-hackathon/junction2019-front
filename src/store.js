import { createStore, applyMiddleware, combineReducers } from "redux"

import apiMiddleware from "./middlewares/api"

const reducers = combineReducers({
  fo: () => "",
})

export const store = createStore(reducers, applyMiddleware(apiMiddleware))
