import React, { useRef } from 'react'
import { Categories } from '../Categories/Categories'
import { Search } from '../Search/Search'
import './header.css'

export const Header = ( {handleSetInputText} ) => {

    let flag = false;
    const popupRef = useRef(null)
    const menuRef = useRef(null)
    
    const showOrNot = () => {
        flag = !flag;
        popupRef.current.classList.toggle("popup-none"); 

        menuRef.current.classList.toggle("menu-off");
    }

    return (
        <header className="header">
            <div className="header-upcontain">
                <img ref={ menuRef } onClick={ showOrNot } className="menu" src="./menu.png" alt="menu"/>
                <img className="logo" src="./logo-1.png" alt="logo"/>    
            </div>
            <div ref={ popupRef } className="popup-window popup-none">  
                <img onClick={ showOrNot } className="cross-icon" alt="cross" src="./cerrar.png"/>
                <Categories/>
            </div>
            <Search handleSetInputText={ handleSetInputText }/>
        </header>
    )
}