import React from 'react';
import { CartWidget } from './CartWidget';
import { NavBar } from './NavBar'
import logo from'../../../public/img/logo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt="logo" />
        <Link to="/"> <h1 className='titulo'>Midland Shopping</h1> </Link>

        <NavBar />
        <CartWidget />
    </header>
  );
;}

export default Header;