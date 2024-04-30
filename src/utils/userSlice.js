import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            // state.user=action.payload;
            // OR 
             return action.payload;
        },
        removeUser:(state)=>{
            // state.user=null;
            // or
            return null;
        }
    }
})

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;