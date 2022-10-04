import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const param=useParams()
    
  return (
    <div>ProductDetail {param.productId} </div>
  )
}

export default ProductDetail;