import React from 'react'
import { useNavigate } from 'react-router-dom'
// https://fakestoreapi.com/products
const Box = ({item}) =>{
   const navigate = useNavigate();
   const addItemToCart = (e) => {
      console.log(item);
   }
    return(
       <div className='card'  data-category={item.category} key={item.id}>
          <h3>{item.title}</h3>
           <img src={item.image} alt="" data-index={item.type}/>
          <p className='seeAll-text'>Price {item.price}</p>
          <button className='btn add__card__button' onClick={(e) => addItemToCart(e)} data-index={item.id}>Add To Card</button>
       </div>
    )
 }
 
export default Box