import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItem = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItem,
            totalAmount: updateTotalAmount
        }
    } else if (action.type === 'REMOVE') {
        // Handle remove logic here
        // You'll need to find and remove the item from the state
        // and update the total amount accordingly.
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartState({ type: 'ADD', item: item });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartState({ type: 'REMOVE', id: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;