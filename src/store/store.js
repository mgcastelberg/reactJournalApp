import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
// Fuente unica de la verdad
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
})