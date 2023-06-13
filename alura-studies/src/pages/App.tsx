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

  function finalizarTarefa() {
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa, 
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas= {setTarefas} />
      <List 
      tarefas = {tarefas} 
      selecionaTarefa = {selecionaTarefa}
      />
      <Timer 
      selecionado={selecionado}
      finalizarTarefa= {finalizarTarefa}
      />
    </div>
  );
}

export default App;
