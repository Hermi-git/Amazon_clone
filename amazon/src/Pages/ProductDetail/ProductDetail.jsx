import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/EndPoints';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setLoading] = useState(false)
  console.log(productId)
  useEffect(() => {
    setLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      console.log(res)
      setProduct(res.data);
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
    
  }, [productId])
  

  return (
    <Layout>
      {isLoading? (<Loader/>): (<ProductCard product={product} flex={true} renderDesc ={true} renderAdd={true}/>) }
      
    </Layout>
    
  )
}

export default ProductDetail