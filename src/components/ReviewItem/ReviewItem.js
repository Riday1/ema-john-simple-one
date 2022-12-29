import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>

            <img src={img} alt="" />

            <div className='review-detail-container'>
                <div className='review-detail'>
                    <p className='review-title'>{name}</p>
                    <p>Price : $ {price}</p>
                    <p>Quantity : $ {quantity}</p>
                    <p>Shipping : $ {shipping}</p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(id)} className='delete-btn'>
                        <FontAwesomeIcon className='font-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;