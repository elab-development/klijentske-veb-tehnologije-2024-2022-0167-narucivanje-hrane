import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
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
        console.log("a " + product.amount);
        product.amount = product.amount + 1;
        console.log("b " + product.amount);
        const a = amountNum + 1;
        console.log("c");
        setAmountNum(a);
        console.log("d");
      }
    })
  };

  const removeFromCart = (id: number) => {
    products.map((product) => {
      if(product.id == id) {
        if(amountNum > 0) {
          product.amount = product.amount - 1;
          console.log("1 " + product.amount);
          const a = amountNum - 1;
          console.log("2");
          setAmountNum(a);
          console.log("3");
        } else{
          console.log("4");
          alert("Broj proizvoda je vec 0.");
          console.log("5");
        }   
      }
    });
  };

  const [amountNum, setAmountNum] = useState(0);

  const products: Product[] = [
    new Product(1, "/assets/food/1.png", "Capriciossa", "Opis", 1280, 0),
    new Product(1, "../assets/food/2.png", "Margarita", "Opis", 1280, 0),
    new Product(1, "../assets/food/3.png", "Madjarica", "Opis", 1530, 0),
    new Product(1, "/assets/food/1.png", "Capriciossa", "Opis", 1280, 0),
    new Product(1, "../assets/food/2.png", "Margarita", "Opis", 1280, 0),
    new Product(1, "../assets/food/3.png", "Madjarica", "Opis", 1530, 0),
    new Product(1, "/assets/food/1.png", "Capriciossa", "Opis", 1280, 0),
    new Product(1, "../assets/food/2.png", "Margarita", "Opis", 1280, 0)
  ]
  /*const [products, setProducts] = useState<Product[]>([]);

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
    fetchData;
  }, products )*/

  let router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products products = {products} onAdd={addToCart} onRemove={removeFromCart} amountNum={amountNum}/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Route>
    ])
  )

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App

