import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState:{},
  name:"authSlice",
  reducers:{
    logout(state,action){}
  }
})

export const authReducer = authSlice.reducer;
export const {logout} = authSlice.actions;