import { cartActions } from './cart'
import { uiActions } from './ui'

const URL = 'https://react-http-156ee-default-rtdb.firebaseio.com/cart.json'

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(URL)

      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = await response.json();
      return data
    }

    try {
      const cartData = await fetchData()

      if (cartData) {
        dispatch(cartActions.replaceCart({ items: cartData }))
      }
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart Data!'
      })
    )

    const sendRequest = async () => {
      const response = await fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(cart.items)
      })

      if (!response.ok) {
        throw new Error()
      }

      return response
    }

    try {
      await sendRequest()
    
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    } catch (err) {
      console.log('err',err)
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!'
        })
      )
    }
  }
}