import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { uiActions } from './store/ui'
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart Data!'
        })
      )
      const response = await fetch('https://react-http-156ee-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart.items)
      })

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!'
          })
        )
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )

      const responseData = await response.json();
    }

    if (isInitial) {
      isInitial = false;
      return
    }

    sendCartData().catch(err => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed!'
        })
      )
    })
  }, [cart, dispatch])

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
