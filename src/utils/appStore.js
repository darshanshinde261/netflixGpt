import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptSearchReducer from "./GptSearchSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:moviesReducer,
        gpt:gptSearchReducer,
    }
})

export default appStore;