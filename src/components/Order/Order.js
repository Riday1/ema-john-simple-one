import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb'
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);



    const handleRemoveItem = (id) => {

        // console.log(selectedProduct);
        const restCart = cart.filter(product => product.id !== id)
        setCart(restCart);
        removeFromDb(id);

    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map((product) => <ReviewItem
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                        key={product.id}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Order;