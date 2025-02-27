import React, { useContext } from 'react'
import classes from './Header.module.css'
import { CiLocationOn, CiLogin } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from '../../Utility/firebase'


function Header() {
    const [{user, basket}, dispatch] = useContext(DataContext)
    console.log(basket.length)

    const totalItem = basket?.reduce((amount, item)=>{
        return item.amount + amount
    }, 0)

  return (
    <section className={classes.fixed}> 
        <section>
            <div className={classes.header__container}>
                {/* logo */}
                <div className={classes.logo__container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                </Link>
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
                <BsSearch  size={38}/>
            </div>
            
            {/* right side links */}
            <div className={classes.order__container}>
                <Link to="/" className={classes.language}>
                    <img src="https://www.shutterstock.com/shutterstock/photos/2491312125/display_1500/stock-vector-usa-flag-icons-vector-set-united-states-of-america-flat-badges-flag-of-usa-vector-flat-symbol-2491312125.jpg" alt="" />
                
                <select name="" id="">
                    <option value="">EN</option>
                </select>
                </Link>
                
                {/* three components */}
                <Link to={!user && "/auth"}>
                    <div>
                        {
                        user? (
                        <>
                        <p>Hello {user?.email?.split("@")[0]}</p>
                        <span onClick={()=>auth.signOut()}>Sign Out</span>
                        </>
                        ): (
                        <>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                        </>
                        )
                        }
                    
                    </div>
                    
                    
                </Link>
                {/* orders */}
                <Link to="/orders">
                    <p>Returns</p>
                    <span>& orders</span>
                </Link>
                {/* cart */}
                <Link to='/cart' className={classes.cart}>
                <BiCart size={38}/>
                <span>{totalItem}</span>
                </Link>
               </div>
               </div>
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header