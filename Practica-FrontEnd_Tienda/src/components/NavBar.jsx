import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import "../styles/NavBar.css"; 

const NavBar = () => {
    const { cart } = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <nav className="navbar">
            <Link to={"/"} className="nav-link">
                <h2>Store</h2>
            </Link>
            <Link to={"/cart"} className="nav-link">
                <div className="cart-container">Carrito
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{quantity}</span>
                </div>
            </Link>
            <Link to={"/login"} className="nav-link">
                <button className="login-button">Ingresar</button>
            </Link>
        </nav>
    );
};

export default NavBar;
