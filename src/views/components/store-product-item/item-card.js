import React from 'react';
import './item-card.scss';
import star from '../../../assets/star-rate.svg';
import comment from '../../../assets/comment.png';
import Button from '../../components/button/button';
import classNames from 'classnames';

const ItemCard = () => {
    return (
        <div className="main-item">
            <div className="main-item__basics">{"Basic"}</div>
            <img className="main-item__image" src={"./coffe.jpg"} alt="produc" />
            <div className="main-item__info">
                <p>{"productName"}</p>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <div className="main-item__comments">
                    <a href="#" >{"1"}</a>
                    <img className="comment-img" src={comment} alt="comment icon" />
                </div>
                <div>{"price"}</div>
            </div>
            <Button className={classNames("main-item__btn--blue")} label="See details" />
            <Button className={classNames("main-item__btn--green")} label="Go to cart" />
        </div>
    )
}

export default ItemCard;