import React from 'react';
import ItemDetail from './item-detail';
import ItemComments from './item-comments';

const ItemPage = () => {
    return (
        <div>
            <ItemDetail />
            <ItemComments />
        </div>
    );
}

export default ItemPage;