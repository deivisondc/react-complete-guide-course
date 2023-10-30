import { configureStore } from '@reduxjs/toolkit'

import uiReducer from './ui'
import cartReducer from './cart'
import productsReducer from './products'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    products: productsReducer
  }
})