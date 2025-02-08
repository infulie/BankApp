import React, {useState} from 'react';
import classes from './menu.module.sass';
import Logo from "./MenuParts/Logo.jsx";
import BtnList from "./MenuParts/BtnList.jsx";
import Account from "./MenuParts/Account.jsx";
import {namesData} from "../../../assets/Variables.jsx";

const Menu = () => {

    const [names, setNaming] = React.useState(namesData
    );

    return (
        <div className={classes.menu}>
            <Logo />
            <BtnList names={names} />
            <Account />
        </div>
    );
};

export default Menu;