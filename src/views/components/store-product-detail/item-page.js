import React from 'react';
import ItemInfo from '../store-product-item/item-info';
import ItemComments from './item-comments-sec';
import Button from '../button/button';
import classNames from 'classnames';

import './item-page.scss';

const ItemPage = () => {
    return (
        <div className="item-page">
            <div className="item-page__item-flex">
                <img className="item-page__image" src={"./coffe.jpg"} alt="produc" />
                <div className="item-page__item-info">
                    <ItemInfo className={classNames("item-page__item-info--size")} />
                    <p className="item-page__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                    <Button className={classNames("item-page__btn--large")} label="Add to cart" />
                </div>
            </div>
            <ItemComments />

        </div>
    )
}

export default ItemPage;