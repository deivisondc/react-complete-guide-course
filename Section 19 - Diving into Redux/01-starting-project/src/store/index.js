import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'

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
    counter: counterReducer,
    auth: authReducer
  }
})

export default store;