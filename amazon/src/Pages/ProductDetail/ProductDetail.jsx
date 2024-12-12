import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../components/Product/ProductCard';

function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState({})
  console.log(productId)
  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      console.log(res)
      setProduct(res.data);
    }).catch((err)=>{
      console.log(err)
    })
    
  }, [productId])
  

  return (
    <Layout>
      <ProductCard product={product}/>
    </Layout>
    
  )
}

export default ProductDetail