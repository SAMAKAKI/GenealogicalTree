import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<{ data: any }, { username: string, email: string, password: string, rePassword: string }>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData
      })
    }),
    login: builder.mutation<{value: {message: string, token: string}}, {usernameOrEmail: string, password: string}>({
      query: (userData) => ({
        url: '/user/login',
        method: 'POST',
        body: userData
      })
    }),
    signUpWithGoogle: builder.mutation<{data: any}, {username: string, email: string}>({
      query: (userData) => ({
        url: '/user/sign-up-with-google',
        method: 'POST',
        body: userData
      })
    }),
    signInWithGoogle: builder.mutation<{data: any}, {username: string, email: string}>({
      query: (userData) => ({
        url: '/user/sign-in-with-google',
        method: 'POST',
        body: userData
      })
    })
  })
})

export const { useSignUpMutation, useLoginMutation, useSignUpWithGoogleMutation, useSignInWithGoogleMutation } = userApi
export const { endpoints: { signUp, login, signUpWithGoogle, signInWithGoogle } } = userApi
