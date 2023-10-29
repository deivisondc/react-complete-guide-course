import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true,
}

const counterSlice = createSlice({
  name: 'teste',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  }
})

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment': {
//       return {
//         ...state,
//         counter: state.counter + 1,
//       }
//     }
//     case 'increase': {
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       }
//     }
//     case 'decrement': {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       }
//     }
//     case 'toggle': {
//       return {
//         ...state,
//         showCounter: !state.showCounter
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export const counterActions = counterSlice.actions
export default store;