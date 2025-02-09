import React from 'react';
import classes from './form.module.sass'
import {formData} from "../../../../assets/Variables.jsx";
import FormInputList from "./inputs/FormInputList.jsx";
import {useState} from "react";
import FormBtn from "./formBtn/FormBtn.jsx";



const Form = () => {
    const [inputValue, setInputValue] = React.useState(formData);
    return (
        <div className={classes.formBackground}>
            <form>
                <h1>You want to made new card</h1>
                <h3>Just complete form for registration</h3>
                <FormInputList values={inputValue}/>
                <FormBtn />
            </form>
        </div>
    );
};

export default Form;