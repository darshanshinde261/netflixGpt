import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trendingMovies:null,
        upcommingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies = action.payload
        },
        addUpcommingMovies:(state,action)=>{
            state.upcommingMovies = action.payload
        }
    }
});

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addPopularMovies,addTrendingMovies,addUpcommingMovies} = moviesSlice.actions;