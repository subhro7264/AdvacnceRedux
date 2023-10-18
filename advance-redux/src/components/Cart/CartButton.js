import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { toggleCart } from '../../store/cartVisible';
const CartButton = (props) => {

  const dispatch=useDispatch();
  const cartQuantity=useSelector(state=>state.cart.totalQuantity)

const toggleVisibleHandler=()=>{
  dispatch(toggleCart())
}

  return (
    <button  onClick={toggleVisibleHandler}className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
