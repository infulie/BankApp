import React from 'react';
import classes from './menubtn.module.sass'

const MenuBtn = (props) => {


    return (
        <div className={classes.menubtn}>
            <a href="">{props.name.title}</a>
        </div>
    );
};

export default MenuBtn;