import React from 'react';
import MenuBtn from "./MenuBtn.jsx";
import classes from './btnlist.module.sass'

const BtnList = ({names}) => {
    return (
        <div className={classes.btnlist}>
            {names.map(name =>
                <MenuBtn name={name} key={name.id} />
            )}
        </div>
    );
};

export default BtnList;