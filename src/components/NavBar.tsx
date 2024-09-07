import React from 'react';
import '../App.css';
import { Outlet, Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <>
    <nav className="navbar">
      <Link to="/">Početna</Link>
      <Link to="/products">Proizvodi</Link>
      <Link to="/cart">Korpa</Link>
      <Link to="/contact">Kontakti</Link>
      <Link to="/profile">Profil</Link>
      <Link to="/signIn"><button className="prijaviSeBtn">Prijavi se</button></Link>
    </nav>
    <Outlet/>
    </>
  );
};

export default NavBar;