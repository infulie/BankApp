import React from 'react';
import FormInput from "./FormInput.jsx";
import classes from './forminputlist.module.sass'

const FormInputList = ({values}) => {
    return (
        <div className={classes.formInputList}>
            {values.map(value => (
                <FormInput
                    value={value}
                    key={value.id}
                    description={value.description}
                    type={value.type}
                />
            ))}
        </div>
    );
};

export default FormInputList;