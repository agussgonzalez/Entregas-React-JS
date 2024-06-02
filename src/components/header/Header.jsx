import React from 'react';
import { Carrito } from './Carrito';
import { NavBar } from './NavBar'
import logo from'../img/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
        <Link to="/"> <h1 className='titulo'>Midland Shopping</h1> </Link>

        <NavBar />
        <Carrito />
    </header>
  );
;}

export default Header;