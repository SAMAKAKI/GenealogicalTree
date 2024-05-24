import { User } from "../../interfaces/user.interface";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<{ data: {success: { message: string}, error: {message: string}}}, { username: string, email: string, password: string, rePassword: string }>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData
      })
    }),
    login: builder.mutation<{ data: {success: { message: string, token: string}, error: {message: string}}}, {usernameOrEmail: string, password: string}>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData
      })
    }),
    signUpWithGoogle: builder.mutation<{ data: {success: { message: string}, error: {message: string}}}, User>({
      query: (userData) => ({
        url: '/user/sign-up-with-google',
        method: 'POST',
        body: userData
      })
    }),
    signInWithGoogle: builder.mutation<{ data: {success: { message: string, token: string}, error: {message: string}}}, {username: string | null, email: string | null}>({
      query: (userData) => ({
        url: '/user/sign-in-with-google',
        method: 'POST',
        body: userData
      })
    }),
    getCurrent: builder.query<{data: { success: { currentUserData: User }, error: { message: string } }}, void>({
      query: () => ({
        url: `/user/current`,
        method: 'GET',
      })
    })
  })
})

export const { useSignUpMutation, useLoginMutation, useSignUpWithGoogleMutation, useSignInWithGoogleMutation, useGetCurrentQuery, useLazyGetCurrentQuery } = userApi
export const { endpoints: { signUp, login, signUpWithGoogle, signInWithGoogle, getCurrent } } = userApi
