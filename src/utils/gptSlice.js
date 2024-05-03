import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gptSearch",
    initialState:{
        searchToggle:false,
        gptResult:null,
        movies:null
    },
    reducers:{
        toggleBtn:(state)=>{
            state.searchToggle=!state.searchToggle;
        },
        addGptMovies:(state,action)=>{
            const {title,movies}=action.payload;
            state.gptResult=title;
            state.movies=movies;
        }
      
    }

})

 export  const {toggleBtn,addGptMovies} = gptSlice.actions ;
 export default gptSlice.reducer;