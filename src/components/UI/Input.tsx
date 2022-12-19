import React, { useState, ChangeEvent} from 'react';

type InputPropsType = {
    placeHolderValue: string
    classN?: string
    callbackBlur?: (text: string) => void
}

export const Input: React.FC<InputPropsType> = ({placeHolderValue, classN , callbackBlur}) => {

    const [value, setValue] = useState('');

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const onBlurCall = () => {
        callbackBlur && callbackBlur(value);
    }

    return (
        <input className={classN} value={value} onChange={changeValue} placeholder={placeHolderValue} autoFocus onBlur={onBlurCall}/>
    )
}
