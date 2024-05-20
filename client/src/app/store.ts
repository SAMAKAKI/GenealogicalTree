import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { api } from './services/api'
import { listenerMiddleware } from './middleware/auth'
import user from './slicers/userSlice'
import { listenerGoogleMiddleware } from './middleware/authGoogle'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware).prepend(listenerGoogleMiddleware.middleware)
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
