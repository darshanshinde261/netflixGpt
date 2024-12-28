import {react} from "react";
import { addNowPlayingMovies, addPopularMovies,addTrendingMovies,addUpcommingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

export const nowplayingMoviesAction = () => 
    async(dispatch)=>{
    try{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
             API_OPTIONS);
        const result = await data.json();
        console.log("now playing action result 200");
        dispatch(addNowPlayingMovies(result.results));
    }catch(error){
        console.log(error)
    }
}
export const popularMoviesAction = () => 
    async(dispatch)=>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const result = await data.json();
        console.log("popular movies action result 200");
    
        dispatch(addPopularMovies(result.results));
    }catch(error){
        console.log(error)
    }
}
export const trendingMoviesAction = () => 
    async(dispatch)=>{
    try{
        const data = await 
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const result = await data.json();
        console.log("trending movies action result 200");
        dispatch(addTrendingMovies(result.results));
    }catch(error){
        console.log(error)
    }
}
export const upcommingMoviesAction = () => 
    async(dispatch)=>{
    try{
        const data = await 
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const result = await data.json();
        console.log("trending movies action result 200");
        dispatch(addUpcommingMovies(result.results));
    }catch(error){
        console.log(error)
    }
}