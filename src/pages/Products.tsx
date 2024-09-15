import React, { useState } from 'react'
import '../App.css'
import OneProduct from '../components/OneProduct'
import { Product } from '../models/product'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'



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
  /*filteri*/
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const filteredProducts = products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
  /*korpa*/
   const navigate = useNavigate();
   const goToCart = () => {
     navigate("/cart");
   }

  return (
    <>
    <h1>PROIZVODI</h1>
    <div>
        Cena od: <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
        Cena do: <input type="number" value={maxPrice === Infinity ? '' : maxPrice} onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : Infinity)} />
      </div>
    <div className="all-products">
        {filteredProducts.map((product) => (
          <OneProduct 
          key={product.id}
          product={product}
          onAdd={()=>onAdd(product.id)}
          onRemove={()=>onRemove(product.id)}
          onDelete={()=>onDelete(product.id)}
          version={ComponentProductVersion.primary}/>
        ))}
    </div>
    { <div className="prod-button">
      <Button label="Idi u korpu" onClick={goToCart}/>
    </div> }
    </>
  )
}

export default Products