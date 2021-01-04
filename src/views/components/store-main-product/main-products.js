import React from 'react';
import './main-products.scss';
import ItemCard from '../store-product-item/item-card';

const MainProducts = () => {
    return (
        <section>
            <h1 className="our-products-title" > Our Products: </h1 >

            < div className="main-grid" >
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div >
        </section>
    );
}

export default MainProducts