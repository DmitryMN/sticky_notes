import React, { useState, ChangeEvent} from 'react';

type InputPropsType = {
    placeHolderValue: string
    className?: string
    callbackBlur?: () => void
}

export const Input: React.FC<InputPropsType> = ({placeHolderValue, className='', callbackBlur}) => {

    const [value, setValue] = useState('');

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <input className={className} value={value} onChange={changeValue} placeholder={placeHolderValue} autoFocus={true} onBlur={callbackBlur}/>
    )
}
