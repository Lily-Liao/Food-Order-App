import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  console.log("cart");

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const clickHandler = ()=>{
    console.log("Ordering~")
  };
  const cartItemList = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItems}>{cartItemList}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button} onClick={clickHandler}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
