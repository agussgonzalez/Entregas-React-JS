import React from 'react';
import { Carrito } from './Carrito';
import { NavBar } from './NavBar'

const Header = () => {
  return (
    <header className='header'>
        <img src="./img/logo-midland.jpg" alt="Logo"/>
        <h1>Midland Shopping</h1>
        <NavBar />
        <Carrito />
    </header>
  );
;}

export default Header;