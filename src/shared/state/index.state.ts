import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../types/enums/common.enum";

const initialState = {
  theme: Theme.LIGHT,
  user: null,
  token: null,
  memories: []
}

export const authSlice = createSlice(
  {
    name: "auth",
    initialState,
    reducers: {
      setTheme: (state) =>{
        state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
      },
      setLogin: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      logout: (state) => {
        state.user = null;
        state.token = null;
      },
      setMemories: (state, action) => {
        state.memories = action.payload.memories;
      }

    },
  }
)
export const { setTheme, setLogin, logout , setMemories } = authSlice.actions;
export default authSlice.reducer;