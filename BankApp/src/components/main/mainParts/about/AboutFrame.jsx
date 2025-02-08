import React from 'react';
import classes from './aboutframe.module.sass'

const AboutFrame = (props) => {
    return (
        <div className={classes.aboutFrame}>
            <strong>{props.title}</strong>

            <p>{props.description}</p>
        </div>
    );
};

export default AboutFrame;