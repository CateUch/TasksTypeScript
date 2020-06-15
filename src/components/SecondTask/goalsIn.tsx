import React from 'react';
import {FilterPriorityType} from './goals';
import style from './goals.module.css';

type PropsType = {
    title: string
    goals: Array<GoalType>
    removeGoal: (goalId: number) => void
    setPriorityFilter: (value: FilterPriorityType ) => void
}

type GoalType = {
    id: number
    title: string
    priority: any
    isDone: boolean
}

export default function GoalsIn (props: PropsType) {
   return (
       <div className={style.goals}>
           <div className={style.title}>{props.title}</div>
           <ul className={style.list}>
               {
               props.goals.map((goal) => 
                <li key={goal.id}>
                    <input type='checkbox' checked={goal.isDone}/>
                    <span> {goal.title}</span>
                    <button onClick={() => {props.removeGoal(goal.id)}}>✘</button>
                    </li>)
               }
           </ul>
           <div>
               <div className={style.pointer}>👇</div>
               <button className={style.button} onClick={() => {props.setPriorityFilter('all')}}>All</button>
               <button className={style.button} onClick={() => {props.setPriorityFilter('middle')}}>Middle</button>
               <button className={style.button} onClick={() => {props.setPriorityFilter('high')}}>High</button>
               <button className={style.button} onClick={() => {props.setPriorityFilter('low')}}>Low</button>
           </div>
       </div>
   )
}
