// components/Navbar.js
"use client"
import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div>
      <header className="header">  
        <div className="container">
          <Link href="" className="logoLink">
            <h2 className="logoText">SAMMA</h2>
            <span className="logoSpan"></span>
          </Link>
          <nav className="navbarLinks">
            <Link href="/" className="navLink">Home</Link>
            <Link href="/about" className="navLink">About</Link>
          
          <Link href="/contact" className="navLink">Contact</Link>
          </nav>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;


