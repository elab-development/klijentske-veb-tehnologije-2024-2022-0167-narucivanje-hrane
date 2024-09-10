import React from 'react'
import '../App.css'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { GoTrash } from "react-icons/go";
import { Product } from '../models/product';

interface OneProductProps {
  product: Product;
  onAdd: (id:number) => void;
  onRemove: (id:number) => void;
  onDelete: (id:number) => void;
  version: ComponentProductVersion
}

export enum ComponentProductVersion {
  primary = 'primary',
  secondary = 'secondary'
}

const OneProduct : React.FC<OneProductProps> = ({product, onAdd, onRemove, onDelete, version}) => {

  if (version === ComponentProductVersion.secondary) {
    return (
      <div className="cart-card">
        <img className="cart-img" src={product.imagePath} alt={product.name} />      
        <h4 className="card-title">{product.name}</h4>
        <h4 className="card-price">{product.price * product.amount} RSD</h4>
        <h4 className="cart-num">{product.amount}</h4>
        <a className="btn" onClick={() => onDelete(product.id)}><GoTrash/></a>
      </div>
    )
  }

  return (
    <div className="card">
      <img className="card-img-top" src={product.imagePath} alt={product.name} />  
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">{product.description}</p>
        <div className="card-bottom">
          <h4 className="card-price">RSD {product.price}</h4>
          <a className="btn" onClick={() => onAdd(product.id)}><CiSquarePlus className="icon" /></a>
          <p className="cart-num">{product.amount}</p>
          <a className="btn" onClick={() => onRemove(product.id)}><CiSquareMinus className="icon" /></a>
        </div>
      </div>
    </div>
  )
}

export default OneProduct