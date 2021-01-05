import React from 'react';
import Button from '../../components/button/button';
import './cart.scss';
import close from '../../../assets/close.png';
import classNames from 'classnames';
import CartItem from './cart-item';

const Cart = () => {
    return (
        <div className="modal">
            <div className="cart">
                <h2>Cart:</h2>
                <img className="close" src={close} alt="close" />
                <h3>Subtotal: <span>{"$315"}</span></h3>
                <Button className={classNames("cart__btn--large")} label="Proceed to payment" />

                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <h3>Subtotal: <span>{"$315"}</span></h3>
                <Button className={classNames("cart__btn--large")} label="Proceed to payment" />
            </div>
        </div>
    );
}

export default Cart;
