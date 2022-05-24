import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import { ReactComponent as CartIcon } from "./images/cart.svg";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const num =
    cartCtx.items.length === 0
      ? 0
      : cartCtx.items.reduce((acc, curr) => {
          return acc + curr.amount;
        }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{num}</span>
    </button>
  );
};

export default HeaderCartButton;
