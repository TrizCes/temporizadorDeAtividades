import React from "react";
import style from './list.module.scss';
import Item from "./item/index";

function List() {
  const taresfas = [
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    },
    {
      tarefa: 'TypeScript',
      tempo: '01:20:00'
    }
  ];
  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
          {taresfas.map((item, index) => (
            <Item
            key={index}
            {...item}/>
          ))}
      </ul>
    </aside>
  )
}

export default List;
