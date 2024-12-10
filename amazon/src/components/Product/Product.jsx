import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
function Product() {
  const [products, setProducts] = useState([])

   useEffect(() => {
     axios.get('https://fakestoreapi.com/products')
     .then((res)=>{
        console.log(res)
        setProducts(res.data)
     }).catch((err)=>{
        console.log(err)
     })
   }, [])
   
  return (
    <section className={classes.product__container}>
        {
            products.map((product)=>{
               return(<ProductCard product ={product} key = {product.id}/>) 
           })
        }
    </section>
  )
}

export default Product