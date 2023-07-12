import {combineReducers, configureStore} from "@reduxjs/toolkit"
import toolkitSlice from './toolkitSlice'
import offersSlice from './offersSlice'
import configSlice from "./configSlice"

const rootReducer = combineReducers({
    toolkit : toolkitSlice,
    offers : offersSlice,
    configuration : configSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})