import { configureStore } from '@reduxjs/toolkit'
import CommanSlice from '../Features/CommanSlice'
export const store = configureStore({
  reducer: {
    comman : CommanSlice ,
  },
})