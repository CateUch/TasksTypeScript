import React, { useState } from 'react';
import style from './App.module.css';
import CloudMessage from './components/FirstTask/CloudMessage';
import List from './components/SecondTask/ListContainer';
import InputName from './components/ThirdTask/InputName'

export default function App() {
           
  return (
    <div className={style.app_page}>
        <CloudMessage />
        <List />
        <InputName />
      </div>
  );
}

