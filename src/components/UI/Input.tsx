import React, { useState, ChangeEvent} from 'react';
import {CallBackBlurType} from '../Note'



type InputPropsType = {
    placeHolderValue: string
    classN?: string
    callbackBlur?: (paramInp: CallBackBlurType) => void
}

export const Input: React.FC<InputPropsType> = ({placeHolderValue, classN , callbackBlur}) => {

    const [value, setValue] = useState('');

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        setValue(event.currentTarget.value);
    }

    const onBlurCall = () => {
        let tag = "";
        const regEx = value.match(/(#\w+)/gi);
        if(regEx !== null) {
            tag = regEx[0] || "";
        }
        callbackBlur && callbackBlur({text: value, tag});
    }

    return (
        <input className={classN} value={value} onChange={changeValue} placeholder={placeHolderValue} autoFocus onBlur={onBlurCall}/>
    )
}
