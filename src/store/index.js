import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
import { legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
    calendar: calendarReducer,
})

export const store = createStore(rootReducer)