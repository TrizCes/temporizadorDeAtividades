import React, { useState } from 'react'; 
import Form from '../components/form';
import List from '../components/List';
import style from './App.module.scss';
import { Timer } from '../components/timer';
import { ITask } from '../interface/ITask';

function App() {
  const [tarefas, setTarefas] = useState<ITask[]>([]);
  const [selecionado, setSelecionado] = useState<ITask>();

  function selecionaTarefa(tarefaSelecionada:ITask) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas= {setTarefas} />
      <List 
      tarefas = {tarefas} 
      selecionaTarefa = {selecionaTarefa}
      />
      <Timer/>
    </div>
  );
}

export default App;
