import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
//import hranaImage from './assets/food_image.svg';
//import scooterImage from './assets/scooter_image.svg';
function App() {

  let router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Route>
    ])
  )

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App

