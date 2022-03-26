import './Books.css'

import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';



const Books = () => {
    const[books,setBooks]=useState([])
    const[cart,setCart]=useState([])

   
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])

    const handleCart=(book)=>{
        const newCart=[...cart,book];
       
        setCart(newCart);  
    }

    
    return (
        <div className='shop-container'>
            <div className='books-container'>
            {
                books.map(book=><Book key={book.isbn13} book={book}  handleCart={handleCart} ></Book>)
            }
        </div>

        <div className="cart-container">
            <Cart  cart={cart}></Cart>
        </div>
        
        </div>
    );
};

export default Books;