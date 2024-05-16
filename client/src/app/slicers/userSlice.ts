import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";
import { RootState } from "../store";

interface InitialState {
  isAuthenticated: boolean,
  token: string
}

const initialState: InitialState = {
  isAuthenticated: false,
  token: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.value.token
      state.isAuthenticated = true
    })
  }
})

export const { logout } = userSlice.actions
export default userSlice.reducer

export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated
