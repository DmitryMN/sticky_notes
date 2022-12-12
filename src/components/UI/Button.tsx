import React from 'react';

type ButtonPropsType = {
  classN?: string
  text?: string
  callback?: () => void
}

export const Button: React.FC<ButtonPropsType> = ({text, classN, callback}) => {
  return (
    <button className={classN} onClick={callback}>{text}</button>
  )
}
