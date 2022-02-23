import React from "react";

function ShoppingCart(){

    
    return(
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <table className="w3-table">
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </table>
        </div>
    )
}

export default ShoppingCart;