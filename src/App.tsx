import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
//import hranaImage from './assets/food_image.svg';
//import scooterImage from './assets/scooter_image.svg';
function App() {

  return (
    <div className="App">
    <NavBar />  {/* Uključujemo NavBar */}
    <Home />
    <h1>NARUČIVANJE HRANE</h1>
    </div>
  )
}

export default App

