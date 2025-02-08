import React from 'react';
import classes from './header.module.sass'
import Logo from "./menu/MenuParts/Logo/Logo.jsx";
import Menu from "./menu/Menu.jsx";

const Header = () => {

    return (
        <header>
            <Menu />

        </header>
    );
};

export default Header;