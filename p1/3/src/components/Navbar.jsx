import React, { useState } from "react";

export default function Navbar({ mobileMode = "normal" }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  
  const mobileClass = `${mobileMode} ${open ? "open" : ""}`;

  return (
    <nav className="navbar">
      <div className="nav-container">
  
        <div className="nav-logo">challenge 3</div>

  
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>


        <div className="nav-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`mobile-menu ${mobileClass}`}>
       
        <div className="mobile-close" onClick={toggleMenu}>
          ✕
        </div>
        <ul>
          
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Development</li>
          <li>CI/CD</li>
          <li>FAQ</li>
          <li>Contact</li>

        </ul>
      </div>
    </nav>
  );
}
