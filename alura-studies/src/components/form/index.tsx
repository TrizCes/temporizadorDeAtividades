import React from 'react';
import Button from '../button';
import style from './form.module.scss';

class Form extends React.Component{
  render(){
    return(
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label>Adicione um novo estudo:</label>
          <input type="text" name='tarefa' id='tarefa' placeholder='O que você quer estudar?' required></input>
        </div>
        <div className={style.inputContainer}>
          <label>Tempo</label>
          <input type="time" step="1" name='tempo' id='tempo' min="00:00:00" max="10:30:00" required></input>
        </div>
        <Button>
          Adicionar 
        </Button>
      </form>
    )
  }
}

export default Form;
