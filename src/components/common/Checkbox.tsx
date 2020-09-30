
//@ts-nocheck
import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CheckboxPropsType = DefaultInputPropsType & {
    callBack: (e: ChangeEvent<HTMLInputElement>) => void,
    status: boolean,
    title:string
}


export const Checkbox: React.FC<CheckboxPropsType> = (props) => {
    const {
        type,
        title,
        checked,
        callBack,
        ...restProps
    } = props

    return (
        <label>
            <input
                type="checkbox"
                onChange={props.callBack}
                {...props}
            />
            <span >{props.title}</span>
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}