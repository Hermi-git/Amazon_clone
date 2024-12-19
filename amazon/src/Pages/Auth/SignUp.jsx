import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import classes from './SignUp.module.css'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from '../../components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
import {ClipLoader} from 'react-spinners'

function SignUp() {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");
  const [{user}, dispatch] = useContext(DataContext);
  console.log(user)
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false
  })
  const navigate = useNavigate()


  const authHandler = async(e)=>{
    e.preventDefault()
    // console.log(e.target.name)
    if(e.target.name === "signin"){
      //firebase auth
      setLoading({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) =>{
        // console.log(userInfo)
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      })
      setLoading({...loading, signIn:false})
      navigate("/")

      }).catch((err) =>{
         setError(err.message)
         setLoading({...loading, signIn:false})
      })
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo)=>{
        // console.log(userInfo)
        setLoading({...loading, signUp:true})
        dispatch({
        type: Type.SET_USER,
        user: userInfo.user
      })
      setLoading({...loading, signUp:false})
      navigate('/')
      }).catch((err) =>{
          setError(err.message)
          setLoading({...loading, signUp:false})
      })

    }
  }

  return (
    <section className={classes.login}>
       <Link to= '/'>
        <img src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png" alt="amazon-logo" />
       </Link>
    <div className={classes.login__container}>
      <h1>Sign In</h1>
      <form action="">
       <div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' />
       </div>

       <div>
        <label htmlFor="password">Password</label>
        <input onChange= {(e)=> setPassword(e.target.value)}value = {password} type="password" id='password' />
       </div>
        <button type='submit' onClick={authHandler} className={classes.signin__btn} name='signin'>
          {
            loading.signIn? (<ClipLoader color='#000' size={15}/>):("Sign In")
          }
          </button>

      </form>

      <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
      </p>

      <button type='submit' onClick={authHandler} className={classes.newAccount__btn} name='signup'>
         {
            loading.signUp? (<ClipLoader color='#000' size={15}/>):("Create Your Amazon Account")
          }
        </button>
      {
        error && <small style={{paddingTop: "4px", color: "red"} }>{error}</small>
      }
    </div>




    </section> 
    
  )
}

export default SignUp