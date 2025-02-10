import React from 'react';
import classes from './about.module.sass'
import AboutFrame from "./AboutFrame.jsx";
import {framesData} from "../../../../assets/Variables.jsx";


const About = () => {

    const [frames, setFrames] = React.useState(framesData);

    return (
        <div className={classes.about}>
            {frames.map((AbtFr) =>(
                <AboutFrame key={AbtFr.id} frame={AbtFr} title={AbtFr.title} description={AbtFr.description} />
                ))}
        </div>
    );
};

export default About;