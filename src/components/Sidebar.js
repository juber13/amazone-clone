import React, { useState } from 'react'

const Sidebar = () => {
    const [data , setData] = useState();
 const fetchData = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const jsonData = await res.json();
    setData(jsonData);
 }
  return (
    <div className='sidebar'>
        <div className="container">
            <h2>Category</h2>
        </div>
    </div>
  )
}

export default Sidebar