import React from 'react';
import { Button } from '../common/Button';
import { Checkbox } from '../common/Checkbox';
import { FilterPriorityType } from './ListContainer';
import style from './Lists.module.css';

type PropsType = {
    title: string
    lists: Array<ListType>
    removeList: (listId: number) => void
    setPriorityFilter: (value: FilterPriorityType) => void
    changeStatus: (number: number) => void
}

type ListType = {
    id: number
    title: string
    priority: any
    isDone: boolean
}


function List(props: PropsType) {
    return (
        <div className={style.lists}>
            <div className={style.title}>{props.title}</div>
            <ul className={style.row}>
                {
                    props.lists.map((list) =>
                        <li key={list.id}>
                            <div className={style.list}>
                                <div>
                                    <div>
                                        <Checkbox callBack={() => props.changeStatus(list.id)}
                                            status={list.isDone}
                                            title={list.title} />
                                    </div>
                                </div>
                                <Button onClick={() => { props.removeList(list.id) }}
                                    buttonName='✘' />
                            </div>
                        </li>)
                }
            </ul>
            <div>
                <div className={style.pointer}>👇</div>
                <div className={style.buttons}>
                    <Button className={style.button}
                        onClick={() => { props.setPriorityFilter('all') }}
                        buttonName='All' />
                    <Button className={style.button}
                        onClick={() => { props.setPriorityFilter('middle') }}
                        buttonName='Middle' />
                    <Button className={style.button}
                        onClick={() => { props.setPriorityFilter('high') }}
                        buttonName='High' />
                    <Button className={style.button}
                        onClick={() => { props.setPriorityFilter('low') }}
                        buttonName='Low' />
                </div>
            </div>
        </div>
    )
}
export default List;