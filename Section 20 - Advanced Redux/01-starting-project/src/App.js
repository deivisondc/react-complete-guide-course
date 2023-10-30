import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import Notification from './components/UI/Notification';

import { fetchCartData, sendCartData } from './store/cartActions'

let isInitial = true;

function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }

    dispatch(sendCartData(cart))
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
