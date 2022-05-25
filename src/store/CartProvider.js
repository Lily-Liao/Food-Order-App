import React, { useReducer } from "react";
import CartContext from "./cart-context";

const DEFAULT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updateItem;
  let updateItems;
  let currTotalAmount;
  switch (action.type) {
    case "ADD":
      const {items}=action;
      let addItemIndex = state.items.findIndex((item) => item.id === items.id)
      if (addItemIndex === -1) {
        updateItems = state.items.concat(items);
      } else {
        updateItem = {
          ...state.items[addItemIndex],
          amount: state.items[addItemIndex].amount + items.amount
        }
        updateItems = [...state.items];
        updateItems[addItemIndex] = updateItem;
      }
      currTotalAmount = Math.round((state.totalAmount + items.price * items.amount) * 100) / 100;
      return { items: updateItems, totalAmount: currTotalAmount };
    case "REMOVE":
      let removeItemIndex = state.items.findIndex((item) => item.id === action.id);
      state.items[removeItemIndex].amount -= 1;
      if (state.items[removeItemIndex].amount === 0) {
        state.items.splice(removeItemIndex, 1);
      }
      currTotalAmount = state.items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount * currentValue.price;
      }, 0);
      state.totalAmount = Math.round(currTotalAmount * 100) / 100;
      return { items: state.items, totalAmount: state.totalAmount };
    default:
      throw new Error();
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, DEFAULT_CART_STATE);
  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", items: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const CART_ITEMS = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={CART_ITEMS}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
