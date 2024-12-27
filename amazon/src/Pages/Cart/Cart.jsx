import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import {Type} from '../../Utility/action.type'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext)
  const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)

 const increment = (item)=>{
 dispatch({
  type : Type.ADD_TO_BASKET,
  item
 })
 }
  const decrement = (id)=>{
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {
            basket?.length===0?(<p> Opps ! No item in your cart!</p>) : (basket?.map((item, i)=>{
              return<section className={classes.cart__product}>
              <ProductCard
              key ={i}
              product={item}
              renderDesc={true}
              flex={true}
              renderAdd={false}/>
              <div className={classes.btn_container}>
                <button className={classes.btn} onClick={()=> increment(item)}><IoIosArrowUp /></button>
                <span>{item.amount}</span>
                <button className={classes.btn} onClick={()=> decrement(item.id)}><IoIosArrowDown /></button>
              </div>
            
            </section>
            }))
          }
        </div>
        {
          basket?.length!==0 && (
          <div className={classes.subtotal}>
            <div>
            <p>Subtotal ({basket?.length} items) </p>
            <CurrencyFormat amount={total}/>
            </div>
            <span>
              <input type="checkbox" />
              <small>This folder contain a gift</small>
            </span>
          <Link to='/payment'>
          Continue to checkOut
          </Link>
        </div>
        )}
        
      </section>
    </Layout>
    
  )
}


export default Cart