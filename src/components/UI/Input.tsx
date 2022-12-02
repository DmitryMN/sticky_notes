import React, { useState, ChangeEvent} from 'react';

type InputPropsType = {
    placeHolderValue: string
}

export const Input: React.FC<InputPropsType> = ({placeHolderValue}) => {

    const [value, setValue] = useState('');

    const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    return (
        <input className='input' value={value} onChange={changeValue} placeholder={placeHolderValue} />
    )
}
