import React, { KeyboardEvent, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
import style from '../ThirdTask/InputName.module.css';

// (TypeScript) домашка от меня №4:
// - добавьте в проект домашек папку common - в ней мы будем хранить универсальные компоненты
// <MyInput value={value} onChange={onChange}/> // это универсальная компонента
// <Hello name={name} sayHello={sayHello}/> // это НЕ универсальная компонента, так как работает только с именами
// - эти компоненты должны быть УНИВЕРСАЛЬНЫМИ и иметь красивые стили (создать самому или найти в интернете)
// - добавьте в проект компоненту, в которой отрисуйте эти универсальные компоненты для демонстрации
// - замените в предыдущих домашках стандартные кнопки и инпуты вашими универсальными компонентами, в последующих домашках используйте свои универсальные компоненты вместо стандартных
// задачи со звёздочками:
// * сделайте так чтоб onChange ваших компонент сразу давал нужное значение (value/checked), а не объект ивента
// * добавьте в инпуту пропс для функции, которая будет выполняться по нажатию кнопки Enter
// * добавьте в свою кнопку необязательный пропс для выбора типа кнопки: стандартный (выбран изначально) или красный (для кнопок удаления/отмены/выхода/...), стили для разных типов должны быть разные
// * добавить необязательный пропс error в инпут, в случае передачи в него значения нужно менять стиль инпута на красный


type PropsInputType =
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & {
        error?: string|null,
        setError?: (value: string | null) => void,
        onChangeItem?: (value: string) => void,
        addItem: () => void
    };


const InputForm = (props: PropsInputType) => {

    const { error, addItem, setError, onChangeItem, ...restProps } = props;

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        if (setError && e.currentTarget.value.trim()) { setError(null) }
        onChangeItem && onChangeItem(e.currentTarget.value)
    };
 
    function onEnterKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if (e.charCode === 13) { addItem && addItem() };
    };
    
    function onBlur() {setError && setError(null) };


    return (
        <input className={error ? `${style.input} ${style.error}` : 'input'}
            type="text"
            onBlur={onBlur}
            onChange={onChange}
            onKeyPress={onEnterKeyPress}
            {...restProps}
        />
    )
};
export default InputForm;
