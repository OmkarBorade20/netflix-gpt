import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';


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

  return (
 
      <RouterProvider router={Routes}/>        
  
  )
}

export default Body;