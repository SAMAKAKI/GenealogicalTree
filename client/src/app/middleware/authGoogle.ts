import { createListenerMiddleware } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";

export const listenerGoogleMiddleware = createListenerMiddleware()

listenerGoogleMiddleware.startListening({
  matcher: userApi.endpoints.signInWithGoogle.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if(action.payload.data.success.token)
      localStorage.setItem('token', action.payload.data.success.token)
  }
})
