import React from 'react';
import './cart-item.scss';
import recycle from '../../../assets/recycle-bin.png';


const CartItem = () => {
    return (
        <div className="cart-item">

            {/* <div className="cart-item__basics">{"Basic"}</div> */}
            <img className="cart-item__img" src={"image"} />
            <p>{"productName"}</p>
            <div>{"$150"}</div>
            <img className="recycle-bin" src={recycle} />

        </div>
    )
}

export default CartItem;