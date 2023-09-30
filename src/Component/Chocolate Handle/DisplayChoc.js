import React, { useContext } from "react";
import '../Chocolate Handle/DisplayChoc.css'
import CartContext from "../Store/Cart-Context";

function DisplayChoc({ items = [] }) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (item, actionType) => {
        // Here, you can use the actionType if needed
        cartCtx.addItem({ ...item, amount: actionType });
    }

    return (
        <div className="display-choc-container">
            <h2>CANDIES AVAILABLE</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <p className="CandyName">Candy Name: {item.Candyname}</p>
                        <p>Description: {item.Description}</p>
                        <p className="Price">Price: {item.Price}</p>
                        <button type="button" onClick={() => addToCartHandler(item, 1)} className="btn btn-success">BUY1</button>
                        <button type="button" onClick={() => addToCartHandler(item, 2)} className="btn btn-success">BUY2</button>
                        <button type="button" onClick={() => addToCartHandler(item, 3)} className="btn btn-success">BUY3</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayChoc;