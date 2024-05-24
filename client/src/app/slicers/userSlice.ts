import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";
import { RootState } from "../store";
import { User } from "../../interfaces/user.interface";

interface InitialState {
  isAuthenticated: boolean,
  token: string
  user: User | null
}

const initialState: InitialState = {
  isAuthenticated: false,
  token: '',
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.token = ''
      state.user = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.data.success.token
      state.isAuthenticated = true
    }).addMatcher(userApi.endpoints.signInWithGoogle.matchFulfilled, (state, action) => {
      state.token = action.payload.data.success.token
      state.isAuthenticated = true
    }).addMatcher(userApi.endpoints.getCurrent.matchFulfilled, (state, action) => {
      state.user = action.payload.data.success.currentUserData
      state.isAuthenticated = true
    })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer

export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated
export const selectCurrentUser = (state: RootState) => state.user.user
export const selectToken = (state: RootState) => state.user.token
