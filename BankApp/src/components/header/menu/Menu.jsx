import React, {useState} from 'react';
import classes from './menu.module.sass';
import Logo from "./MenuParts/Logo.jsx";
import MenuBtn from "./MenuParts/MenuBtn.jsx";

const Menu = () => {

    return (
        <div className={classes.menu}>
            <Logo />

        </div>
    );
};

export default Menu;