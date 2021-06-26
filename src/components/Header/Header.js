import React, { useEffect, useRef, useState } from 'react';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { Link } from "react-router-dom";
import './header.css';

export const Header = ( {handleSetInputText, favorites, funcToggleCart, itemsCart} ) => {

    const [cartCount, setCartCount] = useState(0);
    let flag = false;
    const popupRef = useRef(null);
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    
    const showOrNot = () => {
        flag = !flag;
        popupRef.current.classList.toggle("popup-none"); 
        menuRef.current.classList.toggle("menu-off");
        headerRef.current.classList.toggle("header-off");
        setTimeout(() => {
            popupRef.current.classList.toggle("popup-animation");
        }, 50);
    }

    useEffect(() => {
        let totalItems = 0;
        itemsCart.forEach((item)=> {
            totalItems = totalItems + item.quantity
        })

        setCartCount(totalItems);
    }, [itemsCart]);

    return (
        <>
        <header ref={ headerRef } className="header">
            <div className="header-upcontain">
                <img ref={ menuRef } onClick={ showOrNot } className="menu" src="././menu.png" alt="menu"/>
                <img className="logo" src="././logo-1.png" alt="logo"/>    
            </div>
            
            <Search handleSetInputText={ handleSetInputText }/>

            <div className="product-cart-container-header" onClick={funcToggleCart}>
                    <button className="product-button-cart-header"><img className="product-img-cart-header" alt="cart" src="././cart.png"/></button>
                    <span onClick={funcToggleCart} className="cart-counter">{cartCount}</span>
            </div> 

            <Link to={`/favorites`}>
                <div className="product-heart-container-header">
                    <button className="product-button-heart-header"><img className="product-img-heart-header" alt="heart" src="././brownheart.png"/></button>
                    <span onClick={funcToggleCart} className="favorites-counter">{favorites.length}</span>
                </div> 
            </Link>

        </header>
            <div ref={ popupRef } className="popup-window popup-none"> 
                <img onClick={ showOrNot } className="cross-icon" alt="cross" src="././cerrar.png"/>
                <Categories/>
            </div>
        </>
    )
}