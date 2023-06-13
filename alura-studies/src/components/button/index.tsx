import React from 'react';
import style from './Button.module.scss';
import { IButtonProps } from '../../interface/IButtonProps';

function Button({onClick, type, children}: IButtonProps) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
          {children}
        </button>
  )
}

export default Button;
