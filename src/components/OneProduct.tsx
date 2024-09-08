import React from 'react'
import '../App.css'
import f1 from '../assets/food/1.png'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Product } from '../models/product';

interface OneProductProps {
  product: Product;
  onAdd: (id:number) => void;
  onRemove: (id:number) => void;
  amountNum: number;
}

const OneProduct : React.FC<OneProductProps> = ({product, onAdd, onRemove, amountNum}) => {

  /*const addToCart = () => {
    product.amount = product.amount + 1;
    const a = amountNum + 1;
    setAmountNum(a);
  };

  const removeFromCart = () => {
    if(product.amount > 0) {
      product.amount = product.amount - 1;
      const a = amountNum - 1;
      setAmountNum(a);
    }
    else {
      alert("Broj proizvoda je već 0");
      console.log("poruka");
    }
  }*/

  return (
    <div className="card">
      <img className="card-img-top" src={f1} alt={product.name} />      
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
        <div className="card-bottom">
          <h4 className="card-price">RSD {product.price}</h4>
          <a className="btn" onClick={() => onAdd(product.id)}><CiSquarePlus className="icon" /></a>
          <p className="cart-num">{amountNum}</p>
          <a className="btn" onClick={() => onRemove(product.id)}><CiSquareMinus className="icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default OneProduct