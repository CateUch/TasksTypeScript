import React from 'react';
import {StateType} from './CloudMessage';
import style from './CloudMessage.module.css';
import './CloudMessage.css';

type PropsType = {
    state: StateType
    hours: number
    minutes: number
}



const CloudMessageContainer: React.FC<PropsType> = (props: PropsType) => {

    return (
        <div>
        <section className='header'>
            <div className='timeOne'>{props.hours}:{props.minutes}</div>
            <h1 className='name'>Hi! I'm {props.state.name} {props.state.surname}</h1>
        </section>
        <section className='bubble'>
         <div className='avatar'>
             <img src={props.state.img} />
             </div>
              <div className='box1 sb5'>
                        <div className='name'>{props.state.name}</div>
                        <div className='message'>{props.state.message}</div>
                        <div className='time'>{props.state.mesHour}:{props.state.mesMin}</div>
                    </div>
             </section>
             </div>
            )}

export default CloudMessageContainer;

//{`${style.box1} ${style.sb5}`}