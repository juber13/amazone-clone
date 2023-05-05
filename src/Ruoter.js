import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
import Products from './pages/Products'
import Items from './Storeproducts'
const Ruoter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/shoes' element={<Products products={Items.filter(item => item.category === "shoes")}/>} />
        <Route path='/t-shirt' element={<Products products={Items.filter(item => item.category === "t-shirt")}/>} />
    </Routes>
  )
}

export default Ruoter