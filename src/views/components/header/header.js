import React, { useState } from 'react';
import './header.scss';

const Header = () => {

    /* const [counter, setCounter] = useState(0); */

    /*  const handleClick = () => {
         setCounter(counter + 1);
     }; */

    return (
        < header className="App-header" >
            <div className="logo" >
                <div className="logo__title">
                    Globant
                    <span className="logo__title logo__title--to-right">
                        Shops
                        </span>
                </div>
            </div>
            <div className="cart-header" >
                <a href="#" className="cart__image"></a>
                <a href="#" className="cart__name">cart</a>
                <a href="#" className="cart__counter-circle">
                    <span className="cart__counter-circle--number">
                        {/*  {counter} */}
                    </span>
                </a>
            </div>
        </header >
    );
}

export default Header;