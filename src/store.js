import { createStore, applyMiddleware, combineReducers } from "redux"

import fishingReducer from "./components/Tasks/FishingChat/reducer"
import duckChatReducer from "./components/Tasks/DuckChat/reducer"

import apiMiddleware from "./middlewares/api"

const reducers = combineReducers({
  messages: fishingReducer,
  duckChat: duckChatReducer,
})

export const store = createStore(reducers, applyMiddleware(apiMiddleware))
