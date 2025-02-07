import React from 'react';
import classes from './logo.module.sass';
import logo from './logo.svg';
const Logo = () => {
    return (
        <a href="#" className={classes.logo}>
            <a href="#"><img src={logo} alt="logo" /></a>
            <a href="#">Zbank</a>
        </a>
    );
};

export default Logo;