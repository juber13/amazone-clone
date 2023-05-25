// import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../reduxStore/features/counters/counterSlice'
import {productSlice} from '../../reduxStore/features/counters/productSlice'
const Box = ({item}) =>{
   const disPatch = useDispatch();
   const disPatch2 = useDispatch();
   // const [products , setProducts] = useState([]);
   
   const addItemToCart = (product) => {
      // console.log(item);
      disPatch(addToCart(product));

   }

   const showProductDetails = (item) =>{
      disPatch2(productSlice(item));
   }


    return(
       <div className='card'  data-category={item.category} key={item.id}>
          <h3>{item.title}</h3>
           <img src={item.image} alt="" data-index={item.type}/>
          <p className='seeAll-text'>Price {item.price}</p>
          <div className='btn-container'>
           <button className='btn add__card__button' onClick={() => addItemToCart(item)} data-index={item.id}>Add To Card</button>
           <button className='btn checkout__card__button' onClick={() => showProductDetails(item)} data-index={item.id}>Chekout</button>
          </div>
       </div>
    )
 }
 
export default Box