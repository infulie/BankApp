import React from 'react';
import classes from './main.module.sass'
import About from "./mainParts/about/About.jsx";
import Form from "./mainParts/form/Form.jsx";

const Content = () => {
    return (
        <main>
            <About />
            <Form />

        </main>
    );
};

export default Content;