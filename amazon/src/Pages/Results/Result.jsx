import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/EndPoints'
import classes from './Result.module.css'
import ProductCard from '../../components/Product/ProductCard'
function Result() {
  const [results, setResults] = useState([]);
  const {categoryName} = useParams()
  console.log(categoryName)
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
  .then((res)=>{
    console.log(res)
    setResults(res.data)
  }).catch((err)=>{
    console.log(err)
  })
  }, [categoryName])
  
  
  return (
    <Layout>
      <section>
        <h1 style={{padding: '30px'}}>Results</h1>
        <p style={{padding:'30px'}}>Category/ {categoryName}</p>
        <hr />
        <div className={classes.product__container}>
          {results?.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </section>
    </Layout>
    
  )
}

export default Result