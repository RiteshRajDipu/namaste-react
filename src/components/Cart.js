
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  
const cartItem = useSelector((store) => store.cart.items);
const dispatch = useDispatch();
console.log(cartItem);

const handleClearCart = () => {
   dispatch(clearCart())
}

  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
         <button 
          className="m-2 p-2 rounded-lg bg-black text-white"
          onClick={handleClearCart} 
         >
          Clear Cart
         </button>
          <ItemList items={cartItem} />  
          {cartItem.length === 0 && (
            <h1>Cart is Empty, please add items to the cart.</h1>
          )}
        </div> 
    </div>
  )
}

export default Cart;