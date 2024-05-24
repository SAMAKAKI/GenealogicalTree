import { createListenerMiddleware } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: userApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners()

    if(action.payload.data.success.token)
      localStorage.setItem('token', action.payload.data.success.token)
  }
})
