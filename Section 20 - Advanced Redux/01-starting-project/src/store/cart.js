import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const productName = action.payload.name
      const product = state.items.find(item => item.name === productName)

      if (product) {
        product.amount++
      } else {
        state.items.push(action.payload)
      }
    },
    increaseItemQuantity(state, action) {
      const productName = action.payload.name

      const product = state.items.find(item => item.name === productName)
      product.amount++
    },
    decreaseItemQuantity(state, action) {
      const productName = action.payload.name

      const product = state.items.find(item => item.name === productName)
      
      if (product.amount === 1) {
        state.items = state.items.filter(item => item.name !== productName)
      } else {
        product.amount--
      }
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer