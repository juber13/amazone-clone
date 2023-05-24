import React, {useState,  useEffect } from 'react'
import './card.css'
// import data from '../../../src/StoreData'
import Box from './Box'
import Deals from '../../Deals'

const Card = () => {
  const [data , setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setData(data);
    }
    fetchData();
  },[])

  
  return (
   <div className="card-container" >  
     {data.map((item , index) => <Box item={item} key={index}/>)}
     <Deals/>
   </div>
  )
}

export default Card