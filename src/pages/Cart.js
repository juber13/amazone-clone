import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {removeToCart} from '../reduxStore/features/counters/counterSlice'

import './cart.css';
const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const removeFromcart = (id) => {
    dispatch(removeToCart(id))
  }

  return (
    <div className="cart__container">
        {products.map(product => (
          <div className='cart__content' key={product.id}>
            <h4 className='cart__title'>{product.title}</h4>
            <img src={product.image} className='cart__image' alt={product.title}/>
            <h5>{product.price}</h5>
            <button className='remove__cartItem_btn' onClick={() => removeFromcart(product.id)}>Remove</button>
          </div>
        ))}
    </div>
  )
}

export default Cart