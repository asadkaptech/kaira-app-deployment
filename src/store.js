import { configureStore } from "@reduxjs/toolkit";
import  cartSystem from "./redux/cartSystem"

const store = configureStore({
    reducer: {
        name: cartSystem
    }
})

export default store;