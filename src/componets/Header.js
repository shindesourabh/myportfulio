import React, { useEffect, useState } from "react";
import './styles/Heder.css';
import { Link } from "react-router-dom";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">

                    <h1 class="logo"><a href="index.html">PortFolio</a></h1>

                    <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero"><Link to="/">Home</Link></a></li>
                            <li><a class="nav-link scrollto" > <Link to="/about">About</Link></a></li>
                            <li><a class="nav-link scrollto" > <Link to="/experience">Experience</Link></a></li>
                            <li><a class="nav-link scrollto" ><Link to="/projets">Projects</Link></a></li>
                            {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
                        </ul>
                    </nav>
                    <nav>
                    <div className={`navigation-menu ${isOpen ? 'open' : ''}`}>
                            <button className="menu-button" onClick={toggleMenu}>
                             <i class="bi bi-list mobile-nav-toggle"></i>
                            </button>
                            <ul onClick={toggleMenu}>
                            <li><a><Link to="/" >Home</Link></a></li>
                            <li><a> <Link to="/about" >About</Link></a></li>
                            <li><a> <Link to="/experience" >Experience</Link></a></li>
                            <li><a><Link to="/projets" >Projects</Link></a></li>
                            {/* <li><a>Contact</a></li> */}
                        </ul>
                        </div>
                    </nav>


                </div>
            </header>
        </div>
    )
}
export default Header;