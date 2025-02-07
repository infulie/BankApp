import React from 'react';
import accImg from './account.svg'
import classes from './account.module.sass'

const Account = () => {
    return (
        <div className={classes.account}>
            <a href='#'><img src={accImg} alt=""/></a>
        </div>
    );
};

export default Account;