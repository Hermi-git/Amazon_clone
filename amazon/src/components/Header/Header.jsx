import React from 'react'
import classes from './Header.module.css'
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';


function Header() {
  return (
    <>
        <section>
            <div className={classes.header__container}>
                {/* logo */}
                <div className={classes.logo__container}>
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </a>
                <div className={classes.delivery}>
                <span>
                    {/* icon */}
                   <CiLocationOn />
                </span>
                <div>
                    <p>Delivered To</p>
                    <span>Ethiopia</span>
                </div>
                </div>
                </div>
                 
            {/* search */}
            <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" name='' id='' placeholder='Search product'/>
                {/* icon */}
                <BsSearch  size={25}/>
            </div>
            
            {/* right side links */}
            <div className={classes.order__container}>
                <a href="/" className={classes.language}>
                    <img src="https://www.shutterstock.com/shutterstock/photos/2491312125/display_1500/stock-vector-usa-flag-icons-vector-set-united-states-of-america-flat-badges-flag-of-usa-vector-flat-symbol-2491312125.jpg" alt="" />
                
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                </a>
                
                {/* three components */}
                <a href="/">
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                </a>
                {/* orders */}
                <a href="/">
                    <p>Returns</p>
                    <span>& orders</span>
                </a>
                {/* cart */}
                <a href='/' className={classes.cart}>
                <BiCart size={35}/>
                <span>0</span>
                </a>
               </div>
               </div>
        </section>
        <LowerHeader/>
    </>
  )
}

export default Header