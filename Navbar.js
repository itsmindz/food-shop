import React from "react";
import Product from './product';

export default function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Plant Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/product">Product</a>
                </li>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/category" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/smallplant">Small</a>
                    <a className="dropdown-item" href="/mediumplant">Medium</a>
                    <a className="dropdown-item" href="/largeplant">Large</a>
                    <a className="dropdown-item" href="/decoration">Decoration</a>
                    </div>
                </li> */}
               
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/register">Sign up</a>
                </li>
            </ul>
  </div>
</nav>


        </div>
    );
}
