import React from 'react';
import style from './Buton.module.scss';

class Buton extends React.Component{
  render() {
      return (
        <button className={style.botao}>
          Botão
        </button>
      )
  }
}

export default Buton;