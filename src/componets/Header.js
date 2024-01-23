import React, { useEffect, useState } from "react";
import './styles/Heder.css';
import { Link } from "react-router-dom";
const Header = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(prevVisibility  => !prevVisibility );
    };
    return (
        <div>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center justify-content-between">

                    <h1 class="logo"><a href="index.html">PortFolio</a></h1>

                    <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar">
                    <i class="bi mobile-nav-toggle bi-list" onClick={toggleVisibility}></i>
                        <ul>
                            <li><a class="nav-link scrollto active"><Link to="/">Home</Link></a></li>
                            <li><a class="nav-link scrollto" > <Link to="/about">About</Link></a></li>
                            <li><a class="nav-link scrollto" > <Link to="/experience">Experience</Link></a></li>
                            <li><a class="nav-link scrollto" ><Link to="/projets">Projects</Link></a></li>
                            {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
                        </ul>
                    </nav>
                    {isVisible && (
                        <div>
                            <nav id="navbar" class="navbar navbar-mobile" >
                            <i class="bi mobile-nav-toggle bi-x" onClick={toggleVisibility}></i>
                                <ul onClick={toggleVisibility}>
                                    <li><a class="nav-link scrollto active" href="#hero"><Link to="/">Home</Link></a></li>
                                    <li><a class="nav-link scrollto" > <Link to="/about">About</Link></a></li>
                                    <li><a class="nav-link scrollto" > <Link to="/experience">Experience</Link></a></li>
                                    <li><a class="nav-link scrollto" ><Link to="/projets">Projects</Link></a></li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}
export default Header;