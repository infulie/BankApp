import React from 'react';
import classes from './formInput.module.sass'


const FormInput = (props) => {

    const [insideInput, setInsideInput] = React.useState('')

    function handleInsideInputChange (event) {
        setInsideInput(event.target.value)
    }


    return (
        <div className={classes.formInput}>
            <label
                htmlFor={props.value.ident}>
                <p>{props.value.description}</p>
            </label>
            <input
                type={props.value.type}
                placeholder={props.value.inside}
                onChange={handleInsideInputChange}
                value={insideInput}
                id={props.value.ident}>

            </input>
        </div>
    );
};

export default FormInput;