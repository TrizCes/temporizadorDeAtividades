import React from "react";
import style from './list.module.scss';

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
          {taresfas.map((tarefa, index) => (
            <li key={index} className={style.item}>
              <h3>{tarefa.tarefa}</h3>
              <span>{tarefa.tempo}</span>
            </li>
          ))}
      </ul>
    </aside>
  )
}

export default List;
