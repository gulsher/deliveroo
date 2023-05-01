import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/baksetSlice'
export const store = configureStore({
  reducer: {
    basket: basketReducer
  },
})