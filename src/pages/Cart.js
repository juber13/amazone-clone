import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {removeToCart} from '../reduxStore/features/counters/counterSlice'

import './cart.css';
const Cart = () => {
  // const [productQuentity , setProductQuentity] = useState(1);
  const products = useSelector(state => state.cart);
  const [data , setData] = useState(products);
  const dispatch = useDispatch();
  
  const removeFromCart = (id) => {
    dispatch(removeToCart(id))
  }

  const updateQty = (value , id) => {
    console.log(data , value , id)
    const newState = data.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return {...obj, price: Number(value) * obj.price};
      }
  
      // 👇️ otherwise return the object as is
      return obj;
    });

    console.log(data[id].price);
  
    setData(newState);
  }




  return (
    <div className='cart-wrapper'>
     <div className="cart__container">
         <h3>Items {products.length}</h3>
        {products.length <= 0 ? <h3>Empty Cart</h3> : products.map(product => (
          <div className='cart__content' key={product.id}>
            <h4 className='cart__title'>{product.title}</h4>
            <img src={product.image} className='cart__image' alt={product.title}/>
            <h5>{product.price}</h5>
            <button className='remove__cartItem_btn' onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))}
    </div>

     <div className='amount-container'>
        <h2>Total</h2>
        <table>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>price</th>
              </tr>
              {/* <tr> */}
               {data.map((product , index) => <tr>
                                <td>{index + 1}</td>
                                <td>{product.title.slice(0,35) + '...'}</td>
                                <td>
                                <select name="" id="" onChange={(e) => updateQty(e.target.value , product.id)}>
                                  <option selected>Qty</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                                </td>
                                <td>{product.price}</td></tr>
                              )}
               <tr>
                <td>Sub Total</td>
                <td> {data.map(pro => pro.price).reduce((total , acc) => total + acc , 0)}</td>
                <td>{new Date().toLocaleDateString()}</td>
               </tr>
              {/* </tr> */}
        </table>
     </div>
  </div>
  )
}

export default Cart