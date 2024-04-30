import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.config';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Routes=createBrowserRouter([
  {
    "path":"/",
    element:<Login/>
  },
  {
    "path":"/browse",
    element:<Browse/>
  }
]) 


const Body = () => {

  const dispatch=useDispatch();
 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       //signin 
        const {uid,email,displayName,photoURL} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
     
      } else {
       //signout
         dispatch(removeUser());
        // navigate("/")
      }
    });

  },[])



  return (
    <div>
      <RouterProvider router={Routes}/>        
    </div>
  )
}

export default Body;