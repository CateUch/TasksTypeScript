import React from 'react';

type ButtonAddProps = {
    buttonName: string,
    onClick: () => void,
    //className: string,
    // disabled: boolean,
    // active: boolean,
}

export const Button = ({...props}) => {
    return (
    <button  {...props}>{props.buttonName}</button>
    )
}
