import { ITaskCheck } from '../../../interface/ITaskCheck';
import style from './Item.module.scss';

export default function Item({tarefa, tempo, selecionado, completado, id,  selecionaTarefa}: ITaskCheck) {
    return (
          <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
          onClick={() => !completado && selecionaTarefa(
            {
              tarefa,
              tempo,
              selecionado,
              completado, 
              id
            }
          )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='Tarefa concluida!'></span>}
          </li>
        )
}
