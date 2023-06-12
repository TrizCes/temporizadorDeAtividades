import React from 'react';
import style from './Button.module.scss';
import { IButtonProps } from '../../interface/IButtonProps';

class Button extends React.Component<IButtonProps>{
  render() {
      return (
        <button className={style.botao}>
          {this.props.children}
        </button>
      )
  }
}

export default Button;