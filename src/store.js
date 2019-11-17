import { createStore, applyMiddleware, combineReducers } from "redux"

import fishingReducer from "./components/Tasks/FishingChat/reducer"

import apiMiddleware from "./middlewares/api"

const reducers = combineReducers({
  messages: fishingReducer,
})

export const store = createStore(reducers, applyMiddleware(apiMiddleware))
