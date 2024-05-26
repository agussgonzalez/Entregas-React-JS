import React from 'react';
import { Carrito } from './Carrito';
import { NavBar } from './NavBar'
import logo from'../img/logo.jpg'

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
        <h1 className='titulo'>Midland Shopping</h1>

        <NavBar />
        <Carrito />
    </header>
  );
;}

export default Header;