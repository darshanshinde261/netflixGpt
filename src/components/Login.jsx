import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [errorMessage,setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleform = () =>{
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick = () =>{
    //validation
    const message = checkValidData(email?.current?.value,password?.current?.value)
    setErrorMessage(message);
    //sign in/sign up
    if(message){
      //create a new user or login
      return
    }
    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        updateProfile(auth.currentUser,{
          displayName:name.current.value
        }).then(() =>{
          const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage+" "+errorCode)
      });

    }
    else{
      //sign in
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='absolute'>
      <img
         src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" alt="background" />
         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ?"Sign In":"Sign Up"}</h1>
        { !isSignInForm &&
          <input type="text" ref={name} placeholder='full name'
        className='p-4 my-4 w-full bg-gray-700' />}
        <input ref={email} type="email" placeholder='Email Address'
        className='p-4 my-4 w-full bg-gray-700' />
        <input ref={password} type="password" placeholder='password'
        className='p-4 my-4 w-full bg-gray-700' />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          onClick={handleButtonClick}
         className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleform}>{isSignInForm ?"New to Netflix? Sign up now":"Already user signIn"}</p>
      </form>
    </div>
  )
}

export default Login