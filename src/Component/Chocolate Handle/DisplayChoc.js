import React from "react";
import '../Chocolate Handle/DisplayChoc.css'
import CartContext from "../Store/Cart-Context";

function DisplayChoc({ items = [] }) {
    return (
        <div className="display-choc-container"> {/* Apply the container class */}
            <h2>CANDIES AVAILABLE</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <p className="CandyName">Candy Name: {item.Candyname}</p>
                        <p>Description: {item.Description}</p>
                        <p className="Price">Price: {item.Price}</p>
                        <button type="button" class="btn btn-success">BUY1</button>
                        <button type="button" class="btn btn-success">BUY2</button>
                        <button type="button" class="btn btn-success">BUY3</button>
                    </li>

                ))}
            </ul>

        </div>
    );
}

export default DisplayChoc;
