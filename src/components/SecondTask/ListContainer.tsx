import React, { useState } from 'react';
import List from './List';



export type FilterPriorityType = 'all' | 'high' | 'middle' | 'low';

export default function ListContainer() {

  let [list, setList] = useState([
    { id: 1, title: "ReactJS", priority: 'middle', isDone: false },
    { id: 2, title: "TypeScript", priority: 'middle', isDone: false },
    { id: 3, title: "NativeJS", priority: 'high', isDone: false },
    { id: 4, title: "Foreign Language", priority: 'low', isDone: false },
    { id: 5, title: "Tatoo", priority: 'high', isDone: false }
  ]);

  function removeList(id: number) {
    let filteredLists = list.filter(list => list.id != id);
    console.log(filteredLists);
    setList(filteredLists);
  }

  function changeStatus(CheckboxItem: number) {
    let newList = list;
    const listsItem = newList.find(list => list.id === CheckboxItem);
    if (listsItem) {
      listsItem.isDone = !listsItem.isDone;
      console.log(newList);
      setList(newList);
    }
  }


  let [filter, setFilter] = useState<FilterPriorityType>('all');
  let priorityListsFilter = list;

  if (filter === 'high') {
    priorityListsFilter = list.filter(list => list.priority === 'high');
  }
  if (filter === 'middle') {
    priorityListsFilter = list.filter(list => list.priority === 'middle');
  }
  if (filter === 'low') {
    priorityListsFilter = list.filter(list => list.priority === 'low');
  };

  function setPriorityFilter(value: FilterPriorityType) {
    setFilter(value);
  }

  return (
    <>
      <List title='My goals' 
        lists={priorityListsFilter}
        removeList={removeList}
        setPriorityFilter={setPriorityFilter} 
        changeStatus={changeStatus}
        />
    </>
  )
}
