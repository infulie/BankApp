import React, {useState} from 'react';
import classes from './menu.module.sass';
import Logo from "./MenuParts/Logo.jsx";

import BtnList from "./MenuParts/BtnList.jsx";
import Account from "./MenuParts/Account.jsx";

const Menu = () => {

    const [names, setNaming] = React.useState([
        {id:1, title:'название'},
        {id:2, title:'название'},
        {id:3, title:'название'},
        ]
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