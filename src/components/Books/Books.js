import './Books.css'

import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';



const Books = () => {
    const [books, setBooks] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const handleCart = (book) => {
        const newCart = [...cart, book];
        setCart(newCart);
    }

    // Generate Random Data From Cart
    const randDataShow = () => {
        if (cart.length !== 0) {
            const randomIndex = Math.floor(Math.random() * cart.length);
            const item = cart[randomIndex];
            setRandom([item]);
        }
    }

    // Clear Data From Cart
    const clearData = () => {
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='books-container'>
                {
                    books.map(book => <Book key={book.isbn13} book={book} handleCart={handleCart} ></Book>)
                }
            </div>

            <div className="cart-container">
                <Cart clearData={clearData} rand={random} randDataShow={randDataShow} cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Books;