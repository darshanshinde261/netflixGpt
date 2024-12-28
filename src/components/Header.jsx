import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { removeUser,addUser } from '../utils/userSlice';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth'
import Browse from './Browse';
import { useEffect } from 'react';
import { LOGO } from '../utils/constant';
import { toggleGptSearch } from '../utils/GptSearchSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch)
  const handleSignOut = () =>{
    signOut(auth).then(() =>{
      navigate("/");
    })
    .catch((error) =>{
      navigate("/error");
    })
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user.uid;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          // ...
          navigate("/browse")
          
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/")
        }
      });

      return () => unsubscribe();
},[]);

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearch());
    console.log("click")
  }
  return (
    <div className='absolute flex justify-between w-screen z-20 px-8 py-2 bg-gradient-to-b from-black'>
        <img
        className='w-44'
         src={LOGO} alt="logo" />
        { user &&
         (<div className='flex justify-center items-center gap-3'>
          <button className='py-2 px-4 m-2 text-white bg-purple-800 rounded-lg mx-4 hover:bg-opacity-80 transition-all duration-200'
            onClick={handleGptSearchClick}
          >{showGptSearch ? "HomePage":"GPTSearch"}</button>
          <FaUserCircle className='w-10 h-10' />
          <button className='text-red-500 font-bold' onClick={handleSignOut}>Sign Out</button>
        </div>)}
    </div>
    
    
  )
}

export default Header