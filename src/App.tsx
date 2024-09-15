import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products, { ComponentProductVersion } from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart'
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import { Product } from './models/product';
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import axios from 'axios';
//import hranaImage from './assets/food_image.svg';
//import scooterImage from './assets/scooter_image.svg';
function App() {

  const addToCart = (id: number) => {
    products.map((product) => {
      if(product.id == id) {
        product.amount = product.amount + 1;
        const a = amountNum + 1;
        setAmountNum(a);
        console.log(product.amount);
      }
    })
  };

  const removeFromCart = (id: number) => {
    products.map((product) => {
      if(product.id == id) {
        if(product.amount > 0) {
          product.amount = product.amount - 1;
          const a = amountNum - 1;
          setAmountNum(a);
          console.log(product.amount);
        } else{
          alert("Broj proizvoda je vec 0.");
        }   
      }
    });
  };

  const deleteFromCart = (id: number) => {
    products.map((product) => {      
      if(product.id == id) {
        setAmountNum(amountNum-product.amount);
        product.amount = 0;
      }
    })
  }

  const [amountNum, setAmountNum] = useState(0);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/public/productsData.json');
      console.log(response.data);
      console.log(response.data.products);
      const productsArray: Product[] = response.data.products.map((products: any) => {
        return new Product(products.id, products.imagePath, products.name, products.description, products. price, products.amount);
      });
      console.log(productsArray);
      setProducts(productsArray);
    }
    fetchData();
  }, [] )

  let router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products products = {products} onAdd={addToCart} onRemove={removeFromCart} 
          onDelete={()=>{}} version={ComponentProductVersion.primary}/>}/>
        <Route path='/cart' element={<Cart products={products} onDelete={deleteFromCart}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/gallery' element={<Gallery/>}/>

      </Route>
    ])
  )

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App

