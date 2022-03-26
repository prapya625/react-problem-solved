import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ cart, randDataShow, rand, clearData }) => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        randDataShow();
        setClicked(!clicked);
    }

    return (
        <div className='cart-container'>
            <h1> Total: {cart.length} </h1>

            {
                cart.map(book => <div className='added-book'><p>{book.title}<FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faTrash}></FontAwesomeIcon></p><hr /></div>)
            }

            <div className='btn'>
                <div>
                    <button className='btn-choose' onClick={clickHandler}>Choose One</button>
                </div>
                <div>
                    <button className='btn-clear' onClick={clearData}>Clear All</button>
                </div>
            </div>
            <div>
                {/* Show Random Data */}
                {clicked && <div>
                    {rand.map(data => <div>
                        <p>{data.title}</p>
                    </div>)}
                </div>}
            </div>

        </div>
    );
};

export default Cart;