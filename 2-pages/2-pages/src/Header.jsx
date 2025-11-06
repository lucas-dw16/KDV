import React from 'react';
import logoImg from './assets/jtjtjtjuy-min.jpg';

function Header() {
  return (
    <>
      <header>
        <h1 className="logo">logo</h1>
      </header>


      <img src={logoImg} className="logo-img" alt="Mijn logo" />
    </>
  );
}

export default Header;
