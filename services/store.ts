import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import usersReducer from 'features/users/users.slice'

/* @see https://github.com/vercel/next.js/tree/canary/examples/with-redux */
export function makeStore() {
  return configureStore({
    reducer: { users: usersReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
