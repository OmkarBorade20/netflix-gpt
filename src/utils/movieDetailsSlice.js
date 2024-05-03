import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice=createSlice({
    name:"movieDetails",
    initialState:{
        movieId:null,
        movieDetails:null,
        movieRecomendation:null,
        videoDetails:null
    },
    reducers:{
        setMovieId:(state,action)=>{
            state.movieId=action.payload;
        },
        removeMovieId:(state)=>{
            state.movieId=null;
        },
        setMovieDetails:(state,action)=>{
            state.movieDetails=action.payload;
        },
        setMovieRecomendation:(state,action)=>{
            state.movieRecomendation=action.payload
        },
        setVideoDetails:(state,action)=>{
            state.videoDetails=action.payload 
        }
    }

});

export const  {setMovieId,removeMovieId,setMovieDetails,setMovieRecomendation,setVideoDetails}=movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
