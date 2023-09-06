import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen : false ,
}

export const CommanSlice = createSlice({
  name: 'comman',
  initialState,
  reducers: {
       SideBarIsOpen : (state , action) =>{
        state.isOpen = action.payload
       }
 
  },
})

export const { SideBarIsOpen } = CommanSlice.actions

export default CommanSlice.reducer