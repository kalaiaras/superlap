import { configureStore } from "@reduxjs/toolkit";
import  CartReducer  from "./CartSlice"
export  const store = configureStore({
    reducer:{
        CartReducer:CartReducer
    },
})
export  type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch