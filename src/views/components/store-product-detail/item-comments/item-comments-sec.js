import React from 'react';
import Comment from './item-comment';
import './item-comments-sec.scss';

const ItemComments = () => {
    return (
        <div className="comments">
            <h2 className="comments__title">Comments:</h2>
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default ItemComments;