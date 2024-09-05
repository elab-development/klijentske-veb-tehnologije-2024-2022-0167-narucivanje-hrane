import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <header className="navbar">
      <nav>
        <a href="/">Početna</a>
        <a href="/proizvodi">Proizvodi</a>
        <a href="/korpa">Korpa</a>
        <a href="/kontakt">Kontakt</a>
        <a href="/profil">Profil</a>
        <button className="prijaviSeBtn">Prijavi se</button>
      </nav>
    </header>
  );
};

export default NavBar;