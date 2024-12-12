import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Results/Result'
function Routering() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<SignUp/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/category/:categoryName' element={<Result/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
  )
}

export default Routering