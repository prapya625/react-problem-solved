import './Book.css'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Book = ({ book, handleCart }) => {
    const { image, title, isbn13, price } = book


    return (
        <div className='book-container'>
            <img src={image} alt="" />

            <div className='book-info'>
                <p>{title}</p>
                <p>Isbn No: {isbn13}</p>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => handleCart(book)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Book;