import React from 'react';
import Header from "./Header";
import { useEffect } from 'react';
import { nowplayingMoviesAction, popularMoviesAction, trendingMoviesAction, upcommingMoviesAction } from '../Actions/moviesAction';
import { useDispatch } from 'react-redux';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"; 
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const toggleSearch = useSelector((state) => state.gpt.showGptSearch);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(nowplayingMoviesAction());
    dispatch(popularMoviesAction());
    dispatch(trendingMoviesAction());
    dispatch(upcommingMoviesAction);
  },[])
  
  return (
    <div>
      <Header></Header>
      {toggleSearch ?
      <GptSearch></GptSearch>:
      <><MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      </>
      }
      {/* 
        MainContainer
          - VideoBackground
          - VideoDetails
        SecondaryContainer
          - MovieCards * n
            - cards * n
       */}
    </div>
  )
}

export default Browse