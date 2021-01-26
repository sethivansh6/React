import { combineReducers, createStore } from "redux"
import { Dishes } from "./dishes"
import { Comments } from "./comments"
import { Promotions } from "./promotion"
import { Leaders } from "./leader"

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    })
  )

  return store
}