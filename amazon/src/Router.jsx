import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Results/Result'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtecteRoute/ProtectedRoute'

function Routering() {
 const stripePromise = loadStripe('pk_test_51QZve3AwsUWbDrT5z8so6LIVQJ7o3gig7HNpcrd8etGO7HBUCOKwOWNxueD6uLmaVGAAErQBQALl7IcaeCjc0tQn00aN4eJn2Z');

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<SignUp/>}/>
            <Route path='/payment' element={
              <ProtectedRoute msg="You need to login to make payment" redirect="/payment">
                <Elements stripe={stripePromise}><Payment/></Elements>
              </ProtectedRoute>
              
              }/>
            <Route path='/orders' element={
              <ProtectedRoute msg=" You need to login to get your orders" redirect="/orders">
                <Orders/>
              </ProtectedRoute>
              
              }/>
            <Route path='/category/:categoryName' element={<Result/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
    </Router>
  )
}

export default Routering;