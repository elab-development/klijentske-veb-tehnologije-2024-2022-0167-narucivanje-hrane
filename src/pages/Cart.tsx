import React from 'react'
import { Product } from '../models/product'
import OneProduct, { ComponentProductVersion } from '../components/OneProduct';
import Button from '../components/Button';

interface CartProps {
  products: Product[];
}

const Cart: React.FC<CartProps> = ({products}) => {

  const filteredProducts = products.filter((product) => product.amount > 0);

  return (
    <>
    <h1>KORPA</h1>
    <div className="cart-products">
        <div className="cart-header">
            <h3>Proivod</h3>
            <h3>Cena</h3>
            <h3>Količina</h3>
        </div>
        <div className="cart-list">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                <OneProduct
                    product={product}
                    onAdd={()=>{}}
                    onRemove={()=>{}}
                    onDelete={()=>{}}
                    version={ComponentProductVersion.secondary}/>
                ))
            ) : (
                <h3>Vaša korpa je prazna!</h3>
            )}
        </div>
    </div>
    <div className="cart-buttons">
        <Button label="Vrati se na proizvode" onClick={()=>{}}/>
        <Button label="Poruči" onClick={()=>{}}/>
    </div>
    </>
  )
}

export default Cart