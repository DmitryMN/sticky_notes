import React, { useState, ChangeEvent} from 'react';

type InputPropsType = {
    placeHolderValue: string
    classN?: string
    callbackBlur?: () => void
}

export const Input: React.FC<InputPropsType> = ({placeHolderValue, classN , callbackBlur}) => {

    const [value, setValue] = useState('');

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        console.log("view");
    }

    return (
        <input className={classN} value={value} onChange={changeValue} placeholder={placeHolderValue} autoFocus onBlur={callbackBlur}/>
    )
}
