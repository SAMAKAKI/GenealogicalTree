import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { api } from './services/api'
import { listenerMiddleware } from './middleware/auth'
import user from './slicers/userSlice'
import { listenerGoogleMiddleware } from './middleware/authGoogle'
import { loadStore, saveStore } from './utils/localStorageUtils'

const preloadedState = loadStore()

export const store = configureStore({
  // preloadedState,
  reducer: {
    [api.reducerPath]: api.reducer,
    user
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware).prepend(listenerGoogleMiddleware.middleware)
  },
})

store.subscribe(() => {
  saveStore(store.getState())
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
