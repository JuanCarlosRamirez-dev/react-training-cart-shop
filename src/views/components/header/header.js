import React from 'react';
import './header.scss';

const Header = (props) => {
    return (
        < header className="App-header" >
            <div className="logo" >
                <div className="logo__title">Globant<span className="logo__title logo__title--to-right">Shops</span></div>
            </div>
            <div className="cart">
                <a className="cart__image"></a>
                <a className="cart__name">cart</a>
                <a className="cart__counter-circle"><span className="cart__counter-circle--number">0</span></a>
            </div>
        </header >
    );
}

export default Header;