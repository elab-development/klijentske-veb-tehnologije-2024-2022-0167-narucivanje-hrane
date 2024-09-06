import React from 'react';
import './Home.css';
import s1 from '../assets/slika 1.png';
import s2 from '../assets/slika 2.png';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Brza i sveža hrana dostavljena do Vaših vrata!</h1>
        <p>
          Izaberite iz naše široke ponude jela i uživajte u ukusu kao iz restorana, u udobnosti vašeg doma.
        </p>
      </header>
      
      <div className="home-images">
        <div className="image-left">
          <img src={s1} alt="slika 1" />
        </div>
        <div className="image-right">
          <img src={s2} alt="slika 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;