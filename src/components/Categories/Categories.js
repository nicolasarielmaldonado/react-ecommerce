import { NavLink } from "react-router-dom";
import React from 'react';
import './categories.css';


export const Categories = () => {
    return (
        <div className="categories-box">
            <h3>Categories</h3>
            <NavLink exact className="categories-links" to="/">All Categories</NavLink>
            <NavLink exact className="categories-links" to="/mensclothing">Men's Clothing</NavLink>
            <NavLink exact className="categories-links" to="/womensclothing">Women's Clothing</NavLink>
            <NavLink exact className="categories-links" to="/electronics">Electronics</NavLink>
            <NavLink exact className="categories-links" to="/jewelry">Jewelry</NavLink>
        </div>
    )
}