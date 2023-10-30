import { useSelector, useDispatch } from 'react-redux'

import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items)

  const cartItemsAmount = cartItems.reduce((acc, curr) => {
    return acc + curr.amount
  }, 0)

  const handleButton = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={handleButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default CartButton;
