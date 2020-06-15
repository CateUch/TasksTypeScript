import React, { useState } from 'react';
import style from './App.module.css';
import FirstTask from './components/FirstTask/firstTask';
import SecondTask from './components/SecondTask/goals';
import ThirdTask from './components/ThirdTask/thirdTask'

export default function App() {
           
  return (
    <div className={style.app_page}>
        <FirstTask />
        <SecondTask />
        <ThirdTask />
      </div>
  );
}

