import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MovieDetails from './MovieDetails';


const Routes=createBrowserRouter([
  {
    "path":"/",
    element:<Login/>
  },
  {
    "path":"/browse",
    element:<Browse/>
  },
  {
    "path":"/movie/details/:movieId",
    element:<MovieDetails/>
  }
]) 


const Body = () => {

  return (
 
      <RouterProvider router={Routes}/>        
  
  )
}

export default Body;