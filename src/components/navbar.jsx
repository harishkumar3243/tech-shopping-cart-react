import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShoppingBag } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="MainLogo">
        <ShoppingBag className="MainLogo" size={32} />
        <h1>Tech Cart</h1>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart className="ShopCart" size={32} />
        </Link>
      </div>
    </div>
  );
};
