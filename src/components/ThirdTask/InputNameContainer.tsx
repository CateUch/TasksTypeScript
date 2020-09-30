import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import style from './InputName.module.css';
import { NameType } from './InputName';
import InputForm from '../common/Input'
import { Button } from '../common/Button';
import { v1 } from 'uuid';


let count = 0;

export default function InputNameContainer() {

    let [userNamesArr, setUserNamesArr] = useState<Array<NameType>>([]);
    let [inputItem, setItem] = useState('');
    let [error, setError] = useState<string | null>(null);

    function addUserName(inputItem: string) {
        let userNameArr = { id: v1(), userName: inputItem.trim() };
        setUserNamesArr([userNameArr, ...userNamesArr]);
        alert(`Hi${userNameArr.userName}!`);
        setItem('');
    };

    const addItem = () => {
        if (inputItem.trim() !== '') {
            addUserName(inputItem);
            setItem('');
            count++;
        } else {
            setError('Enter your name 🥺');
            } 
    };
    const everyName = userNamesArr.map(n => n.userName).join(`/ `);

    return (
        <div className={style.activeBox}>
            <h1 className={style.title}>What's your name?</h1>
            <div className={style.listOfNames}>
                <InputForm
                    value={inputItem}
                    error={error}
                    setError={setError}
                    addItem={addItem}
                    onChangeItem={setItem}
                    />
                <Button onClick={addItem} buttonName="Send" />
                <div>
                <span >Total users - {userNamesArr.length}</span>
                </div>
                    <span className={style.listOfNames}> {everyName} </span>
                    <div>
                </div>
            </div>
        </div>
    )
}


