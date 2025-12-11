import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type CartState = {
  items: Prato[],
  step: number
  clicked: boolean
}

const initialState: CartState = {
  items: [],
  step: 0,
  clicked: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    },
    RemoveItem: (state, action: PayloadAction<Prato>) => {
      state.items = state.items.filter((item) => item.nome !== action.payload.nome)
    },
    NextFunction: (state) => {
      state.step += 1
    },
    PrevFunction: (state) => {
      state.step -= 1
    },
    FinishingFunction: (state) => {
      state.step = 0
    },
    Clicked: (state) => {
      state.clicked = !state.clicked
    }
  },
})

export const { Clicked, FinishingFunction, addItem, RemoveItem, NextFunction, PrevFunction } = cartSlice.actions
export default cartSlice.reducer
