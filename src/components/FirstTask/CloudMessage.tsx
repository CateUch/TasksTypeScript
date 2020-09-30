import React from 'react';
import CloudMessageContainer from './CloudMessageContainer';



export type StateType = {
    img: string
    name: string
    surname: string
    message: string
    mesHour: number
    mesMin: number
};

export default function CloudMessage () {

     let state: StateType = {
        img: `https://cdn.pixabay.com/photo/2016/06/15/16/00/woman-1459220_1280.png`,
        name: 'Ekaterina',
        surname: ' Uchaykina',
        message: 
        'Существует теория, которая утверждает, что если однажды кто-нибудь доподлинно выяснит, что такое и для чего нужна Вселенная, она тотчас же исчезнет, и вместо нее появится нечто еще более причудливое и необъяснимое. Существует и другая теория, согласно которой это уже случилось.',
        mesHour: 15,
        mesMin: 16
        };

        let h = new Date ();
        let hours = h.getHours();
        let minutes = h.getMinutes();
            
    return <CloudMessageContainer state={state} hours={hours} minutes={minutes}/>
    }