import React from 'react';
import './item-comment.scss';

const Comment = ({ customer, comment }) => {
    return (
        <div className="comment">
            <h3 className="comment__customer">{"customer"}</h3>
            <p className="comment__content">{"comment"}</p>
        </div>
    )
}

export default Comment;