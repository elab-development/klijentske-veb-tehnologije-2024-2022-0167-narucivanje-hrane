import React from 'react'
import '../App.css'
import OneProduct from '../components/OneProduct'
import { Product } from '../models/product'

interface ProductsProps {
  products: Product[];
  onAdd: (id:number) => void;
  onRemove: (id:number) => void;
  onDelete: (id:number) => void;
  version: ComponentProductVersion;
}

export enum ComponentProductVersion {
  primary = 'primary',
  secondary = 'secondary'
}

const Products: React.FC<ProductsProps> = ({products, onAdd, onRemove, onDelete}) => {
  return (
    <>
    <h1>PROIZVODI</h1>
    <div className="all-products">
        {products.map((product) => (
          <OneProduct 
          product={product}
          onAdd={()=>onAdd(product.id)}
          onRemove={()=>onRemove(product.id)}
          onDelete={()=>onDelete(product.id)}
          version={ComponentProductVersion.primary}/>
        ))}
    </div>
    </>
  )
}

export default Products