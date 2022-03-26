import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

 
  
    return (
        <div className='cart-container'>
            <h1> Total: {cart.length} </h1>
            
            {
                cart.map(book=> <div className='added-book'><p>{book.title}<FontAwesomeIcon style={{marginLeft:'10px'}} icon={faTrash}></FontAwesomeIcon></p><hr /></div>  )
            }
           
           <div className='btn'>
           <div>
           <button className='btn-choose'>Choose One</button>
           </div> 
           <div>
           <button className='btn-clear'>Clear All</button>
           </div>
           </div>
           
        </div>
    );
};

export default Cart;