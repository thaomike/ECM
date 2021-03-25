import React from 'react';
import '../Style/Header.css';
import Menu from './header/Menu'


const Header = () => {
    return( 
    <div id = "header" className="fixed-top">
        <Menu/>
    </div>
)};

export default Header