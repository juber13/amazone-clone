// import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../reduxStore/features/counters/counterSlice'
// https://fakestoreapi.com/products
const Box = ({item}) =>{
   const disPatch = useDispatch();
   // const [products , setProducts] = useState([]);
   
   const addItemToCart = (product) => {
      // console.log(item);
      disPatch(addToCart(product));

   }


    return(
       <div className='card'  data-category={item.category} key={item.id}>
          <h3>{item.title}</h3>
           <img src={item.image} alt="" data-index={item.type}/>
          <p className='seeAll-text'>Price {item.price}</p>
          <button className='btn add__card__button' onClick={() => addItemToCart(item)} data-index={item.id}>Add To Card</button>
       </div>
    )
 }
 
export default Box