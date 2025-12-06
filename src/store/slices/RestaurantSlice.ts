import { createSlice, type PayloadAction } from '@reduxjs/toolkit'



const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction) => {
      state.push(action.payload)
    }
  }
})

export const { addItem } = restaurantSlice.actions
export default restaurantSlice.reducer
