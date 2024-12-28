import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"Gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearch:(state,action) =>{
            state.showGptSearch = !state.showGptSearch;
            console.log(state.showGptSearch);
        },
        addGptMovieResult : (state,action) =>{
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    },
});

export default GptSlice.reducer;
export const {toggleGptSearch,addGptMovieResult} = GptSlice.actions