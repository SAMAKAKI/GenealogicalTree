import { api } from "./api";

export const feedbackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createFeedback: builder.mutation<{ data: {success: { message: string}, error: {message: string}}}, { title: string, description: string, email: string }>({
      query: (userData) => ({
        url: '/feedback/createFeedback',
        method: 'POST',
        body: userData
      })
    }),
  })
})

export const { useCreateFeedbackMutation } = feedbackApi
export const { endpoints: { createFeedback } } = feedbackApi
