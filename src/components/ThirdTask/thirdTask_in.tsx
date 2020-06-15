import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import style from './thirdTask.module.css';
import { NameType } from './thirdTask';



type PropsType = {
    userNamesArr: Array<NameType>
    addUserName: (name: string) => void
}

type everyName = string;

let count = 0;

export default function ThirdTaskIn(props: PropsType) {

    let [name, setName] = useState('');

    const onAddUser = () => {
        if (!name) {
            alert("Enter your name 🥺")
        } else {
            props.addUserName(name);
            setName('');
            count++;
        }
    };

    const everyName = props.userNamesArr.map((n) => (n.userName)).join(`/ `);

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    };

    const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) { onAddUser() }
    };

    return (
        <div className={style.activeBox}>
            <h1 className={style.title}>What's your name?</h1>
            <div className={style.listOfNames}>
                <input 
                    value={name}
                    onChange={onChangeName}
                    onKeyPress={onEnterKeyPress} />
                <button onClick={onAddUser}>Send</button>
            </div>
            <span className={style.listOfNames}>Total users - {props.userNamesArr.length}</span>
            <div>
                <span className={style.listOfNames}> {everyName} </span>
            </div>
        </div>
    )
}
