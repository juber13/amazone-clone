// import React, { useEffect } from 'react'
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux'
// import Sidebar from '../components/Sidebar';
const ProductDetails = () => {
  const[data , setData] = useState({});
  // const product = useSelector((state) => state.cart);
  const url = window.location.pathname;
  const id = url.split("").slice(url.length -1).toString();



  const fetchProduct = async() => {
    try{
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await res.json();
      setData(jsonData);
    }catch(err){

    }
  }

  useEffect(() => {
     fetchProduct();
  },[])

  console.log(data);


  return (
    <div className="wrapper">
    {/* <Sidebar/> */}
    <div className='product-details-container'  data-category={data.category} key={data.id}>
           <div className="product-img">
             <img src={data.image} alt="" data-index={data.type}/>
           </div>
          <div className="product-info">
           <h3>{data.title}</h3>
           <p className='price'>Price {data.price}</p>
           <p className='product-description'>{data.description}</p>
           <button className='btn add__card__button'>Buy Now</button>
          </div>
       </div>
    </div>
  )
}

export default ProductDetails