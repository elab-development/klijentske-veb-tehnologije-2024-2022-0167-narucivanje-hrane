import React from 'react'
import '../App.css'
import OneProduct from '../components/OneProduct'
import { Product } from '../models/product'
import f1 from '../assets/food/2.png'

const myProduct = new Product("../assets/food/2.png", "Pica", "Lepa pica", "RSD 1500")

const Products = () => {
  return (
    <div className="all-products">
        <OneProduct product={myProduct}/>
        <OneProduct product={myProduct}/>
        <OneProduct product={myProduct}/>
    </div>
  )
}

export default Products