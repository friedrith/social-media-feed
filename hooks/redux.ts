import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import { AppDispatch, AppState } from 'services/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
