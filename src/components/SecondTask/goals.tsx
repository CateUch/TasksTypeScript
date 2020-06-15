import React, {useState}from 'react';
import GoalsIn from './goalsIn';

export type FilterPriorityType = 'all'|'high'|'middle'|'low';

export default function SecondTask () {

let [goals, setGoals] = useState ([
    { id: 1, title: "ReactJS", priority: 'middle', isDone: true },
    { id: 2, title: "TypeScript", priority: 'middle', isDone: true },
    { id: 3, title: "NativeJS", priority: 'high', isDone: false },
    { id: 4, title: "Foreign Language", priority: 'low', isDone: true },
    { id: 5, title: "Tatoo", priority: 'high', isDone: false }
  ]);


    function removeGoal (id:number) {
    let filteredGoals=goals.filter(goal => goal.id != id);
    setGoals(filteredGoals);
  }

  let [filter, setFilter] = useState<FilterPriorityType>('all');

  let priorityGoalsFilter = goals;

  if (filter === 'high') {
    priorityGoalsFilter = goals.filter(goal => goal.priority === 'high');
  }
    if (filter === 'middle') {
      priorityGoalsFilter = goals.filter(goal => goal.priority === 'middle');}
      if (filter === 'low') {
        priorityGoalsFilter = goals.filter(goal => goal.priority === 'low');
      };

  function setPriorityFilter (value: FilterPriorityType) {
    setFilter(value);
  }

  return (
    <div >
          <GoalsIn title='My goals' goals={priorityGoalsFilter} removeGoal={removeGoal} setPriorityFilter={setPriorityFilter}/>
        </div>
  )
}