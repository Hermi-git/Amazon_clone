import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/currencyFormat/CurrencyFormat';
import {axiosInstance} from '../../Api/axios';
import ClipLoader from "react-spinners/ClipLoader";
import {db} from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';


function Payment() {
   const[{basket, user}] = useContext(DataContext);
   const navigate = useNavigate();

   const totalItem = basket?.reduce((amount, item)=>{
        return item.amount + amount
    }, 0)
   
   const stripe = useStripe();
   const elements = useElements();
   const [error, setError] = useState(null);
   const [process, setProcess] = useState(false);

   const handleChange = (e) => {
      e?.error?.message? setError(e?.error?.message) : setError("")
   }
  
   const total = basket.reduce((amount, item)=>{
    return item.price * item.amount + amount
  }, 0)

  const handlePayment = async (e) => {
    e.preventDefault();
    try{
      setProcess(true);
      // contact the backend to get the client secret
      const response = await axiosInstance({
        method: 'post',
        url: `/payment/create?total=${total * 100}`,
      })
    //  console.log(response.data)

     const clientSecret = response.data?.clientSecret;
     //client side confirmation
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, 
        {payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      // save orders to database
      await db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })
      
      setProcess(false);
      navigate('/orders', {state:{msg: 'Order Placed Successfully'}});
    }catch(err){
      console.log(err)
      setProcess(false);
    }
    
      
  }

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
                <form onSubmit={handlePayment}>
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
                  <button type='submit'>
                    {
                      process?(<div className={classes.loading}><ClipLoader color = 'gray' size = {12} /><p>Please Wait...</p></div>): ('Pay Now')
                    }
                  </button>
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