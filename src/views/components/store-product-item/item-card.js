import React from 'react';
import './item-card.scss';
import Button from '../../components/button/button';
import classNames from 'classnames';
import ItemInfo from './item-info';

const ItemCard = () => {

    return (
        <div className="main-item">
            <div>
                <div className="main-item__basics">{"Basic"}</div>
                <img className="main-item__image" src={"./coffe.jpg"} alt="produc" />
                <ItemInfo className={classNames("main-item__item-info--size")} />
            </div>
            <Button className={classNames("main-item__btn--blue")} label="See details" />
            <Button className={classNames("main-item__btn--green")} label="Go to cart" />
        </div>
    )
}

export default ItemCard;