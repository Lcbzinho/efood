import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

const initialState: Prato[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Prato>) => {
      state.push(action.payload)
    },
    RemoveItem: (state, action: PayloadAction<Prato>) => {
      return state.filter((item) => item.nome !== action.payload.nome)
    }
  },
})

export const { addItem, RemoveItem } = cartSlice.actions
export default cartSlice.reducer
