import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat';


function Payment() {
   const[{basket, user}] = useContext(DataContext);

   const totalItem = basket?.reduce((amount, item)=>{
        return item.amount + amount
    }, 0)
   
   const stripe = useStripe();
   const elements = useElements();
   const [error, setError] = useState(null);

   const handleChange = (e) => {
      e?.error?.message? setError(e?.error?.message) : setError("")
   }
  
   const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)

  return (
    <Layout>
      {/* header */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      {/* payment method */}
      <section className={classes.payment__section}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 react lane</div>
            <div>chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* products */}
          <div className={classes.flex}>
            <h3>Review items and Delivery</h3>
            <div>
              {basket.map((item) =><ProductCard product= {item} flex={true}/>)
              }
              </div>
          </div>
          <hr />

          {/* card form */}
          <div className={classes.flex}> 
            <h3>Payment Methods</h3>
            <div className={classes.payment__card__container}>
              <div className={classes.payment__details}>
                <form action="">
                  {/* error message */}
                  {
                    error && <small style={{color:'red'}}>{error}</small>
                  }
                  {/* card element */}
                  <CardElement onChange={handleChange}/>
                 {/* price */}
                 <div className={classes.payment__price}>
                  <div>
                    <span style={{display:'flex', gap:'10px'}} >
                      <p>Total Order</p> | <CurrencyFormat amount={total}/> 
                    </span>
                  </div>
                  <button>Pay Now</button>
                 </div>
                </form>
              </div>
            </div>
          </div>
      </section>

      
    </Layout>
    
  )
}

export default Payment