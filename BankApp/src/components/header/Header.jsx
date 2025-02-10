import React from 'react';
import classes from './header.module.sass'

import Menu from "./menu/Menu.jsx";
import Slider from "./slider/Slider.jsx";

const Header = () => {

    const images = [
        "/sliderphoto/slider__first.png",
        "/sliderphoto/slider__second.png",
        "/sliderphoto/slider__tried.png"
    ]

    return (
        <header>
            <Menu />
            <Slider images={images} />
        </header>
    );
};

export default Header;