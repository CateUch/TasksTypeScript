import React, { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Junior from './components/pages/Junior';
import JuniorPlus from './components/pages/JuniorPlus';
import PreJunior from './components/pages/PreJunior';


export default function App() {

  return (
    <HashRouter>
      <div className={style.page}>
      <Navbar />
      <div className={style.app_content}>
      
        <Route path='/prejunior' component={PreJunior} />
        <Route path='/junior' component={Junior} />
        <Route path='/juniorplus' component={JuniorPlus} />
      </div>
      </div>
    </HashRouter>
  );
}

