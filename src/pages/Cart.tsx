import React from 'react'
import { Product } from '../models/product'
import OneProduct, { ComponentProductVersion } from '../components/OneProduct';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

interface CartProps {
  products: Product[];
  onDelete: (id:number) => void;
}

const Cart: React.FC<CartProps> = ({products, onDelete}) => {

  const filteredProducts = products.filter((product) => product.amount > 0);

  const navigate = useNavigate();
  const backToProd = () => {
    navigate("/products");
  }
  const message = () => {
    alert("Porudžbina poslata!");
  }

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
                    onDelete={onDelete}
                    version={ComponentProductVersion.secondary}/>
                ))
            ) : (
                <h3>Vaša korpa je prazna!</h3>
            )}
        </div>
    </div>
    <div className="cart-buttons">
        <Button label="Vrati se na proizvode" onClick={backToProd}/>
        <Button label="Poruči" onClick={message}/>
    </div>
    </>
  )
}

export default Cart