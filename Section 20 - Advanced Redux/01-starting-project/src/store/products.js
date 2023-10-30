import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { 
      name: 'Test',
      description: 'This is a first product - amazing!',
      price: 6.00
    }
  ]
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
})

export default productsSlice.reducer