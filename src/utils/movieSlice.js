import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        actionTitle:null,
        nowPlaying:null,
        actionTrailer:null,
        Popular:null,
        Upcoming:null,
        TopRated:null,
        Recomended:null,
        Trending:null,
    },
    reducers:{
        addActionTitle:(state,action)=>{
            state.actionTitle=action.payload;
         },
        addNowPlaying:(state,action)=>{
           state.nowPlaying=action.payload;
        },
        addActionTrailer:(state,action)=>{
            state.actionTrailer=action.payload;
         },
         addPopular:(state,action)=>{
            state.Popular=action.payload;
         },
         addUpcoming:(state,action)=>{
            state.Upcoming=action.payload;
         },
         addTopRated:(state,action)=>{
            state.TopRated=action.payload;
         },
         addRecomended:(state,action)=>{
            state.Recomended=action.payload;
         },
        removeNowPlaying:(state,action)=>{
            state.nowPlaying=null;
        },
        addTrendingMovies:(state,action)=>{
          state.Trending=action.payload;
        }
    }
});

export const {addNowPlaying,removeNowPlaying,addActionTrailer,addPopular,addUpcoming,addTopRated,addRecomended,addActionTitle,addTrendingMovies } = movieSlice.actions;

export default movieSlice.reducer;