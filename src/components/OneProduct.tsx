import React from 'react'
import '../App.css'
import f1 from '../assets/food/1.png'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Product } from '../models/product';

interface OneProductProps {
  product: Product;
}

const OneProduct : React.FC<OneProductProps> = ({product}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={f1} alt={product.name} />      
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
        <div className="card-bottom">
          <h4 className="card-price">{product.price}</h4>
          <a className="btn"><CiSquarePlus className="icon" /></a>
          <p className="cart-num">0</p>
          <a className="btn"><CiSquareMinus className="icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default OneProduct