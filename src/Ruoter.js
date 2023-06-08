import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home';
// import Items from './Storeproducts'
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
const Ruoter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Ruoter