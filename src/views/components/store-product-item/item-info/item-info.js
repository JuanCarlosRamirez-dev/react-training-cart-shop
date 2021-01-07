import React from 'react';
import star from '../../../assets/star-rate.svg';
import comment from '../../../assets/comment.png';
import classNames from 'classnames';
import './item-info.scss';

const ItemInfo = ({ className }) => {
    const cssClasses = classNames(className)
    return (
        <div>
            <div className="item-info__info">
                <p className={cssClasses}>{"productName"}</p>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <div className="item-info__comments">
                    <a href="#" >{"1"}</a>
                    <img className="comment-img" src={comment} alt="comment icon" />
                </div>
                <div className={cssClasses}>{"price"}</div>
            </div>
        </div>
    )
}

export default ItemInfo;
