import React from 'react'
import {Link} from 'react-router-dom'
import classes from './SignUp.module.css'

function SignUp() {
  return (
    <section className={classes.login}>
       <Link>
        <img src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png" alt="amazon-logo" />
       </Link>
    <div className={classes.login__container}>
      <h1>Sign In</h1>
      <form action="">
       <div>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
       </div>

       <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' />
       </div>
        <button className={classes.signin__btn}>Sign In</button>

      </form>

      <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>

      <button className={classes.newAccount__btn}>Create Your Amazon Account</button>
    </div>




    </section> 
    
  )
}

export default SignUp