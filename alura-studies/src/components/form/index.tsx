import React from 'react';
import Button from '../button';
import style from './form.module.scss';
import { ITask } from '../../interface/ITask';
import { v4 as uuidv4 } from 'uuid';


class Form extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITask[]>>}>{

  state: ITask = {
    tarefa: "",
    tempo: "00:00",
    selecionado: false,
    completado: false,
    id: ""
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    this.props.setTarefas( (tarefasAntigas : ITask[]) => 
    [
      ...tarefasAntigas, 
      {...this.state, 
        selecionado: false,
        completado: false,
        id: uuidv4()
      }
    ]);
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }

  render(){
    return(
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label>Adicione um novo estudo:</label>
          <input 
          type="text" 
          name='tarefa' 
          value={this.state.tarefa}
          onChange={event => {this.setState({...this.state, tarefa: event.target.value})}}
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
          value={this.state.tempo} 
          onChange={event => {this.setState({...this.state, tempo: event.target.value});}}
          id='tempo' 
          min="00:00:00" 
          max="10:30:00" 
          required></input>
        </div>
        <Button type= "submit">
          Adicionar 
        </Button>
      </form>
    )
  }
}

export default Form;
