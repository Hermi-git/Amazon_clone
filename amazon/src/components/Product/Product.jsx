import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader'
function Product() {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)

   useEffect(() => {
    setLoading(true)
     axios.get('https://fakestoreapi.com/products')
     .then((res)=>{
        // console.log(res)
        setProducts(res.data)
        setLoading(false)
     }).catch((err)=>{
        console.log(err)
        setLoading(false)
     })
   }, [])
   
  return (
    <>
    {
      isLoading?(<Loader/>) :(<section className={classes.product__container}>
        {
            products.map((product)=>{
               return(<ProductCard product ={product} key = {product.id} renderAdd={true}/>) 
           })
        }
    </section>)
    }
    
    </>
  )
}

export default Product