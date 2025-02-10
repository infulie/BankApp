import React from 'react';
import classes from './logo.module.sass';
import logo from './logo.svg';
const Logo = () => {
    return (
        <a href="#" className={classes.logo}>
            <span><img src={logo} alt="logo" /></span>
            <span>Zbank</span>
        </a>
    );
};

export default Logo;