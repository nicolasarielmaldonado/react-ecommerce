import React from 'react'
import { Search } from '../Search/Search'
import { ChooseTheme } from '../ChooseTheme/ChooseTheme'
import './header.css'
import { Nav } from '../Nav/Nav'

export const Header = () => {
       
    return (
        <header className="header">
            <div className="header-upcontain">
            <h1 className="logo">Logo</h1>
            <ChooseTheme/>
            </div>
            <Search/>
            <Nav/>
        </header>
    )
}