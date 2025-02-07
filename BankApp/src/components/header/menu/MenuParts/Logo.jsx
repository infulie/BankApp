import React from 'react';
import classes from './logo.module.sass';
import logo from './logo.svg';
const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <a>Zbank</a>
        </div>
    );
};

export default Logo;