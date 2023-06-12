import React from 'react'; 
import Form from '../components/form';
import List from '../components/List';
import style from './App.module.scss';
import { Timer } from '../components/timer';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <Timer/>
    </div>
  );
}

export default App;
