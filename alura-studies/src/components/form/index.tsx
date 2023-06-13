import React, { useState } from 'react';
import Button from '../button';
import style from './form.module.scss';
import { ITask } from '../../interface/ITask';
import { v4 as uuidv4 } from 'uuid';

interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTarefas}: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setTarefas( (tarefasAntigas : ITask[]) => 
    [
      ...tarefasAntigas, 
      {
        tarefa, 
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  
  return(
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
          <label>Adicione um novo estudo:</label>
          <input 
          type="text" 
          name='tarefa' 
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
          id='tarefa' 
          placeholder='O que você quer estudar?' 
          required></input>
        </div>
        <div className={style.inputContainer}>
          <label>Tempo</label>
          <input 
          type="time" 
          step="1" 
          name='tempo'
          value={tempo} 
          onChange={event => setTempo(event.target.value)}
          id='tempo' 
          min="00:00:00" 
          max="10:30:00" 
          required></input>
        </div>
        <Button type= "submit">
          Adicionar 
        </Button>
      </form>
  );
}

export default Form;
